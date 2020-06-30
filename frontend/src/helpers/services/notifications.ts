import toastr from 'toastr';
import 'toastr/build/toastr.css';

// Toastr config
toastr.options.preventDuplicates = true;
toastr.options.closeButton = true;
toastr.options.timeOut = 1500;

export const displaySuccessNotification = (message: string) => toastr.success(message);

export const displayErrorNotification = (message: string) => toastr.error(message);
