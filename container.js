import {
  Lifetime,
  asClass,
  asValue,
  asFunction,
  createContainer,
  InjectionMode
} from 'awilix';
import glob from 'glob';

import * as utils from './utils';

async function getInstance(options = {}) {
  //Load all model in container that can be globally access
  let modelObj = {};
  glob('**/*.model.js', function (err, files) {
    files.forEach((file) => {
      const modelName = file.split('/')[1].split('.')[0];
      let name = modelName.charAt(0).toUpperCase() + modelName.slice(1);
      modelObj[name] = new require(`./${file}`);
    });
  });
  const opts = {
    injectionMode: InjectionMode.PROXY,
    ...options
  };

  const modulesToLoad = [
    [
      'services/**.js',
      {
        register: asClass,
        lifetime: Lifetime.SCOPED
      }
    ],
    [
      'controllers/**.js',
      {
        register: asClass,
        lifetime: Lifetime.SINGLETON
      }
    ]
  ];
  // Create the container and set the injectionMode to PROXY (which is also the default).
  return createContainer(opts).loadModules(modulesToLoad, {
    formatName: 'camelCase',
    cwd: __dirname
  })
      .register({
        container: { resolve: c => c },
        lifetime: Lifetime.SINGLETON
      })
      .register({
        model: asValue(modelObj),
        lifetime: Lifetime.SINGLETON
      })
      .register({
        utils: asValue(utils),
        lifetime: Lifetime.SINGLETON
      });
}

let containerInstance = null;
const getContainerInstance = async options => {
  if (!containerInstance) containerInstance = await getInstance(options);
  return containerInstance;
};

export default getContainerInstance;
