<style scoped>
.settings-container >>> .v-tabs-items {
  background-color: transparent;
}
</style>

<template>
  <div>
    <v-tabs class="settings-container" v-model="tab" grow show-arrows>
      <v-tab href="#keybinds" v-if="$vuetify.breakpoint.mdAndUp">{{ $vuetify.lang.t(`$vuetify.settings.keybinds.name`) }}</v-tab>
      <v-tab href="#themes" v-if="canSeeThemes">{{ $vuetify.lang.t(`$vuetify.settings.theme.name`) }}</v-tab>
      <v-tab v-for="(item, key) in settings" :key="'tab-' + key" :href="'#' + key">{{ $vuetify.lang.t(`$vuetify.settings.${key}.name`) }}</v-tab>
    </v-tabs>
    <div v-if="tab === 'keybinds'" :class="$vuetify.breakpoint.mdAndUp ? 'scroll-container-tab' : ''">
      <keybind class="ma-2" name="prevMainFeature"></keybind>
      <keybind class="ma-2" name="nextMainFeature"></keybind>
      <template v-if="canSeeDebug">
        <keybind class="ma-2" name="debugSkip1m"></keybind>
        <keybind class="ma-2" name="debugSkip10m"></keybind>
        <keybind class="ma-2" name="debugSkip1h"></keybind>
        <keybind class="ma-2" name="debugSkip1d"></keybind>
      </template>
    </div>
    <div v-else-if="tab === 'themes'" class="d-flex justify-center flex-wrap pa-1" :class="$vuetify.breakpoint.mdAndUp ? 'scroll-container-tab' : ''">
      <theme-item class="ma-1" v-for="(theme, name) in themes" :key="'theme-' + name" :name="name"></theme-item>
    </div>
    <div v-else :class="$vuetify.breakpoint.mdAndUp ? 'scroll-container-tab' : ''">
      <v-row no-gutters>
        <v-col v-for="(item, key) in settings[tab].items" class="d-flex align-center" :key="'setting-' + key" cols="12" sm="6" md="4" lg="3" xl="2">
          <setting-item class="ma-2" :category="tab" :name="key"></setting-item>
        </v-col>
      </v-row>
      <div v-if="tab === 'general'" class="ma-2">
        <div class="mb-2">{{ $vuetify.lang.t(`$vuetify.settings.general.timeSpeed.name`) }}: {{ currentTimeSpeed }}x</div>
        <div class="d-flex flex-wrap">
          <v-btn class="ma-1" small @click="setTimeSpeed(1)">1x</v-btn>
          <v-btn class="ma-1" small @click="setTimeSpeed(2)">2x</v-btn>
          <v-btn class="ma-1" small @click="setTimeSpeed(5)">5x</v-btn>
          <v-btn class="ma-1" small @click="setTimeSpeed(10)">10x</v-btn>
          <v-btn class="ma-1" small @click="setTimeSpeed(25)">25x</v-btn>
          <v-btn class="ma-1" small @click="setTimeSpeed(50)">50x</v-btn>
          <v-btn class="ma-1" small @click="setTimeSpeed(100)">100x</v-btn>
          <v-btn class="ma-1" small @click="setTimeSpeed(250)">250x</v-btn>
          <v-btn class="ma-1" small @click="setTimeSpeed(500)">500x</v-btn>
          <v-btn class="ma-1" small @click="setTimeSpeed(1000)">1000x</v-btn>
        </div>
      </div>
      <div v-if="tab === 'experiment'" class="d-flex justify-center ma-2">
        <alert-text type="warning" style="max-width: 600px;">{{ $vuetify.lang.t(`$vuetify.settings.experiment.warning`) }}</alert-text>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { APP_ENV, APP_TESTING } from '../../js/constants';
import AlertText from '../partial/render/AlertText.vue';
import SettingItem from '../partial/settings/Item.vue'
import Keybind from '../partial/settings/Keybind.vue'
import ThemeItem from '../partial/settings/ThemeItem.vue';

export default {
  components: { SettingItem, Keybind, ThemeItem, AlertText },
  data: () => ({
    tab: 'general'
  }),
  computed: {
    ...mapState({
      unlock: state => state.unlock
    }),
    settings() {
      let obj = {};
      for (const [key, elem] of Object.entries(this.$store.state.system.settings)) {
        if (elem.unlock === null || this.unlock[elem.unlock].see) {
          let items = {};
          for (const [subkey, subelem] of Object.entries(elem.items)) {
            if (
              (subelem.unlock === null || this.unlock[subelem.unlock].see) &&
              (subelem.mobile === undefined || (subelem.mobile === this.$vuetify.breakpoint.smAndDown)) &&
              (this.canSeeUpdates || key !== 'notification' || subkey !== 'updateCheck')
            ) {
              items[subkey] = subelem;
            }
          }
          obj[key] = {...elem, items};
        }
      }
      return obj;
    },
    canSeeThemes() {
      return this.unlock.gemFeature.see;
    },
    canSeeDebug() {
      return APP_TESTING && this.unlock.debugFeature.see;
    },
    canSeeUpdates() {
      return APP_ENV === 'WEB';
    },
    themes() {
      let obj = {};
      for (const [key, elem] of Object.entries(this.$store.state.system.themes)) {
        if (elem.owned || elem.price !== null) {
          obj[key] = elem;
        }
      }
      return obj;
    },
    currentTimeSpeed() {
      const settingSpeed = Number(this.$store.state.system.settings.general.items.timeSpeed.value);
      const speed = !isNaN(settingSpeed) && settingSpeed > 0 ? settingSpeed : Number(this.$store.state.system.timeMult);
      return Math.max(1, Math.min(1000, !isNaN(speed) ? speed : 1));
    }
  },
  methods: {
    setTimeSpeed(speed) {
      this.$store.dispatch('system/updateSetting', {category: 'general', name: 'timeSpeed', value: speed});
    }
  },
  destroyed() {
    this.$store.commit('system/updateKey', {key: 'keybindCurrent', value: null});
  }
}
</script>
