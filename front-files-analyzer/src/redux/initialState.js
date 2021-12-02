export default {
  user:{
    token: '',
    isAuthenticated: false,
    role: null,
    request: {
      headers:{
          'Content-Type': 'application/json',
      },
      body: {},        
    },
    loading: false,
    error: null,
    users:{}
  },
  sidebar: {
    sideSelected: false,
    optionSelected: 2
  },
  userInterface: {
    isSidebarOpened: false,
  },
  person: {
    persons:{
      loadingGetAllActivities: false,
      errorGetAllActivities: null,
      totalRecords: 11,
      data: [
        { _id: 1, name: 'juan 3', last_father_name: "hernandez", last_mother_name: "palma", email: 'mail@mail.com', password: 'test123', user_type:"3",  },
        { _id: 2, name: 'juan 3', last_father_name: "hernandez", last_mother_name: "palma", email: 'mail@mail.com', password: 'test123', user_type:"3", },
        { _id: 3, name: 'juan 3', last_father_name: "hernandez", last_mother_name: "palma", email: 'mail@mail.com', password: 'test123', user_type:"3", },
        { _id: 4, name: 'juan 3', last_father_name: "hernandez", last_mother_name: "palma", email: 'mail@mail.com', password: 'test123', user_type:"3", },
        { _id: 5, name: 'juan 3', last_father_name: "hernandez", last_mother_name: "palma", email: 'mail@mail.com', password: 'test123', user_type:"3", },
        { _id: 6, name: 'juan 3', last_father_name: "hernandez", last_mother_name: "palma", email: 'mail@mail.com', password: 'test123', user_type:"3", },
        { _id: 7, name: 'juan 3', last_father_name: "hernandez", last_mother_name: "palma", email: 'mail@mail.com', password: 'test123', user_type:"3", },
        { _id: 8, name: 'juan 3', last_father_name: "hernandez", last_mother_name: "palma", email: 'mail@mail.com', password: 'test123', user_type:"3", },
        { _id: 9, name: 'juan 3', last_father_name: "hernandez", last_mother_name: "palma", email: 'mail@mail.com', password: 'test123', user_type:"3", },
        { _id: 10, name: 'juan 3', last_father_name: "hernandez", last_mother_name: "palma", email: 'mail@mail.com', password: 'test123', user_type:"3", },
        { _id: 11, name: 'juan 3', last_father_name: "hernandez", last_mother_name: "palma", email: 'mail@mail.com', password: 'test123', user_type:"3", },
      ]
    },
  },
  administrator: {
    administrators:{
      loadingGetAllAdministrators: false,
      errorGetAllAdministrators: null,
      totalRecords: 11,
      data: [
        { id: 1, profileMediaId: 1, name: 'oliva 1', primaryEmail: 'mail@mail.com', primaryPhone: '33 11111 22222' },
        { id: 2, profileMediaId: 2, name: 'oliva 2', primaryEmail: 'mail@mail.com', primaryPhone: '33 11111 22222' },
        { id: 3, profileMediaId: 1, name: 'oliva 3', primaryEmail: 'mail@mail.com', primaryPhone: '33 11111 22222' },
        { id: 4, profileMediaId: 3, name: 'oliva 3', primaryEmail: 'mail@mail.com', primaryPhone: '33 11111 22222' },
        { id: 5, profileMediaId: 3, name: 'oliva 3', primaryEmail: 'mail@mail.com', primaryPhone: '33 11111 22222' },
        { id: 6, profileMediaId: 3, name: 'oliva 3', primaryEmail: 'mail@mail.com', primaryPhone: '33 11111 22222' },
        { id: 7, profileMediaId: 3, name: 'oliva 3', primaryEmail: 'mail@mail.com', primaryPhone: '33 11111 22222' },
        { id: 8, profileMediaId: 3, name: 'oliva 3', primaryEmail: 'mail@mail.com', primaryPhone: '33 11111 22222' },
        { id: 9, profileMediaId: 3, name: 'oliva 3', primaryEmail: 'mail@mail.com', primaryPhone: '33 11111 22222' },
        { id: 10, profileMediaId: 3, name: 'oliva 3', primaryEmail: 'mail@mail.com', primaryPhone: '33 11111 22222' },
        { id: 11, profileMediaId: 3, name: 'oliva 3', primaryEmail: 'mail@mail.com', primaryPhone: '33 11111 22222' },
      ]
    },
  },
  file: {
    files:{
      loadingGetAllfiles: false,
      errorGetAllfiles: null,
      totalRecords: 9,
      data: [
        { id: 1, name: 'archivo 1', url: "url", type: 'pdf',  created_at: "2021-11-20", last_updated: "2021-11-21", size: "222", userId: "3", user_type: "2", },
        { id: 2, name: 'archivo 2', url: "url", type: 'pdf',  created_at: "2021-11-20", last_updated: "2021-11-21", size: "221", userId: "1", user_type: "1", },
        { id: 3, name: 'archivo 3', url: "url", type: 'pdf',  created_at: "2021-11-20", last_updated: "2021-11-21", size: "221", userId: "1", user_type: "1", },
        { id: 4, name: 'archivo 4', url: "url", type: 'docx', created_at: "2021-11-20", last_updated: "2021-11-21", size: "221", userId: "1", user_type: "2",  },
        { id: 5, name: 'archivo 5', url: "url", type: 'docx', created_at: "2021-11-20", last_updated: "2021-11-21", size: "221", userId: "1", user_type: "2",  },
        { id: 6, name: 'archivo 6', url: "url", type: 'docx', created_at: "2021-11-20", last_updated: "2021-11-21", size: "221", userId: "1", user_type: "2",  },
        { id: 7, name: 'archivo 7', url: "url", type: 'txt',  created_at: "2021-11-20", last_updated: "2021-11-21", size: "221", userId: "1", user_type: "3", },
        { id: 8, name: 'archivo 8', url: "url", type: 'txt',  created_at: "2021-11-20", last_updated: "2021-11-21", size: "221", userId: "1", user_type: "3", },
        { id: 9, name: 'archivo 9', url: "url", type: 'txt',  created_at: "2021-11-20", last_updated: "2021-11-21", size: "221", userId: "1", user_type: "3", },
      ]
    },
  },
};
