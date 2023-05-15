<template>
  <div id="identityExtraDataAppMain">
    <span class="identity-extra-data-app-title">{{ $t('identityExtraDataApp.i18n.label') }}</span>
    <birthday-connections-list birthday-items="" />
  </div>
</template>
export default {
  data: () => ({
    connectionsBirthdays : null,
  }),
};
