import identityExtraDataAppMain from './components/identityExtraDataAppMain.vue';
import birthdayConnectionsList from './components/connectionsList.vue';

const components = {
  'identity-extra-data-main': identityExtraDataAppMain,
  'birthday-connections-list': birthdayConnectionsList,
};
for (const key in components) {
  Vue.component(key, components[key]);
}
