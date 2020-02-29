import {
  Lifetime,
  asClass,
  asValue,
  createContainer,
  InjectionMode
} from 'awilix';

async function getInstance(options = {}) {
  const opts = {
    injectionMode: InjectionMode.PROXY
  };

  const modulesToLoad = [
    // [
    //   'model/**.js',
    //   {
    //     register: asClass,
    //     lifetime: Lifetime.SINGLETON
    //   }
    // ],
    [
      'services/**.js',
      {
        register: asClass,
        lifetime: Lifetime.SINGLETON
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
  const container = createContainer(opts).loadModules(modulesToLoad, {
    formatName: 'camelCase',
    cwd: __dirname
  });

  return container;
}

let containerInstance = null;
const getContainerInstance = async options => {
  if (!containerInstance) containerInstance = await getInstance(options);
  return containerInstance;
};

export default getContainerInstance;
