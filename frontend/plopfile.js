module.exports = function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'Generate a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name (PascalCase):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/plop/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/plop/test.js.hbs',
      },
      {
        type: 'add',
        path:'src/components/{{pascalCase name}}/styled.tsx',
        templateFile: 'templates/plop/styled.js.hbs',
      },
    ],
  });
};
