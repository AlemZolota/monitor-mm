// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyARYq7HmPECiT4l3iBPGqFhOEBYVCYgXUA',
    authDomain: 'allz-moneymanager.firebaseapp.com',
    databaseURL: 'https://allz-moneymanager.firebaseio.com',
    projectId: 'allz-moneymanager',
    storageBucket: '',
    messagingSenderId: '23965545330'
  }
};
