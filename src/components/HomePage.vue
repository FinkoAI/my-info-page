<template>
    <div class="row justify-center">
        <div class="col-12 col-md-8">
            <q-card flat bordered>
                <q-card-section horizontal>
                    <img
                        class="col-5"
                        src="../assets/avatar.png"
                    />
                    <q-card-section class="col-7">
                        <q-card-section>
                            <div class="text-h3">{{`I'm `}} <b>{{ fullName }}</b></div>
                            <div class="text-h4">{{ jobTitle }}</div>
                        </q-card-section>
                        <q-separator inset />
                        <q-card-section>
                            <q-list>
                              <about-list-item
                                v-for="(aboutItem, index) in aboutItems"
                                :key="index"
                                :title="aboutItem.title"
                                :label="aboutItem.label"
                                :reference="aboutItem.reference"
                                :icon="aboutItem.icon"
                              />
                            </q-list>
                        </q-card-section>
                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>

import {
  fabGithub, fabLinkedin, farCalendar, farEnvelope, fasAddressCard,
} from '@quasar/extras/fontawesome-v5';
import AboutListItem from './AboutListItem.vue';

export default {
  components: {
    AboutListItem,
  },
  data() {
    return {
      fullName: 'Anton Finko',
      jobTitle: 'Web Application Developer',
    };
  },
  computed: {
    aboutItems() {
      return [
        {
          reference: 'https://github.com/FinkoAI',
          label: 'https://github.com/FinkoAI',
          title: 'GITHUB',
          icon: fabGithub,
        },
        {
          reference: 'https://www.linkedin.com/in/anton-finko-32004383/',
          label: 'https://www.linkedin.com/in/anton-finko-32004383/',
          title: 'LinkedIn',
          icon: fabLinkedin,
        },
        {
          reference: 'mailto:anton.finko@mail.ru',
          label: 'anton.finko@mail.ru',
          title: 'E-Mail',
          icon: farEnvelope,
        },
        {
          label: 'Tomsk, 634029, Russia',
          title: 'Address',
          icon: fasAddressCard,
        },
        {
          label: 28,
          title: 'Age',
          icon: farCalendar,
        },
      ];
    },
  },
};
</script>
