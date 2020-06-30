import axios, { AxiosResponse } from 'axios';
import flatten from 'lodash/flatten';
import moment, { Moment } from 'moment';
import parse from 'url-parse';
import * as uuid from 'uuid';

export function parseQuery(queryStr: string) {
  if (!queryStr) return {};

  queryStr = queryStr.replace(/^[#?]/, '');
  const result: { [key: string]: string } = {};
  for (const part of queryStr.split('&')) {
    const [encodedKey, encodedValue] = part.split('=', 2);
    if (encodedKey && encodedValue !== null) {
      result[decodeURIComponent(encodedKey)] = decodeURIComponent(encodedValue);
    }
  }
  return result;
}

async function getPaginatedResult(options: any) {
  const { nextUrl } = options;
  const response: AxiosResponse = await axios(nextUrl);
  return response.data;
}

export async function getPaginatedResults<T>(options: any) {
  const results: T[] = [];
  if (!options.nextUrl) return results;

  let keepGoing = true;
  while (keepGoing) {
    const response = await getPaginatedResult(options);
    results.push(response.results);
    if (response.next) {
      options.nextUrl = response.next;
    } else {
      keepGoing = false;
    }
  }
  return flatten<T>(results);
}

export const generateUUID = (): string => {
  return uuid.v4();
};

export function calTimeDiffInMinute(dateStr: string): number {
  const now: Moment = moment();
  // Convert the date argument to moment date object
  const dateMomentObj: Moment = moment(new Date(parseFloat(dateStr) * 1000));
  // Check the minute difference between 2 time
  const minutes: number = moment.duration(dateMomentObj.diff(now)).asMinutes();
  return minutes;
}

export function getUrlPath(url: string | null): string | null {
  if (!url) {
    return null;
  }
  return parse(url).pathname + parse(url).query;
}

export const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const buildQueryPath = (queryObj: {
  [key: string]: string | number | boolean | null | undefined | string[];
}): string => {
  const queryParameters: string[] = Object.keys(queryObj)
    .filter((key) => {
      const value = queryObj[key];
      if (Array.isArray(value)) return value.length > 0;
      return Boolean(value);
    })
    .map((key) => `${key}=${encodeURIComponent(queryObj[key]!.toString())}`);
  return `?${queryParameters.join('&')}`;
};

/**
 * Generates a random string.
 * @param length The length of the generated string
 * @param alphabet The characters used to generate the string. Defaults to letters and digits
 */
export function generateRandomString(
  length: number,
  alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
): string {
  return Array(length)
    .join()
    .split(',')
    .map(() => alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
    .join('');
}

export function capitalizeFirstLetter(word: string) {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatDate(date: Date, newFormat?: string) {
  if (!newFormat) return moment(date).format();
  return moment(date).format(newFormat);
}
