({
  form: {
    formType: 'reference',
    mainSchema: 'entities.Account',
    store: 'memory',

    allow: 'read',
    schema: 'Account',
  },
  
  formData: {
    ref: 'entities.Account.ref',
  },
  async formModule() {
    b.init = async () => {
      console.log('back init');
    };
    f.init = async () => {
      console.log('front init');
      console.log('get value on front from back', b.getValue('login'));
    };
    b.getValue = async (name) => {
      return ref[name];
    };
  },
  formView: {
    title: {
      text: { en: 'Accounts' },
      titleShow: true,
    },
    children: [
      {
        typeElement: 'groupElements',
        title: {
          titleShow: false,
        },
        children: [
          {
            typeElement: 'fieldElement',
            title: {
              text: { en: 'login' },
            },
            dataSource: 'ref.login',
          },
          {
            typeElement: 'fieldElement',
            title: {
              text: { en: 'email' },
            },
            dataSource: 'ref.email',
          },
          {
            typeElement: 'fieldElement',
            title: {
              text: { en: 'phone' },
            },
            dataSource: 'ref.phone',
          },
          {
            typeElement: 'fieldElement',
            title: {
              text: { en: 'active' },
            },
            dataSource: 'ref.active',
          },
        ],
      },
    ],
  },
});
