<template>
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <q-timeline>
          <q-timeline-entry heading>
              {{ new Date() | formatDate('MMMM, YYYY') }}
          </q-timeline-entry>
          <work-experience-item
            v-for="(workExperienceItem, index) in workExperienceItems"
            :key="index"
            :start-date="workExperienceItem.startDate"
            :position="workExperienceItem.position"
            :work-place="workExperienceItem.workPlace"
            :specialities="workExperienceItem.specialities"
          />
        </q-timeline>
      </div>
    </div>
</template>

<script>
import WorkExperienceItem from '@/components/WorkExperienceItem.vue';

import dateFilters from '@/filters/date-filters';

export default {
  components: {
    WorkExperienceItem,
  },
  filters: {
    formatDate: dateFilters.formatDate,
  },
  computed: {
    workExperienceItems() {
      return [
        {
          startDate: new Date('2017-08-06'),
          position: 'Senior Web Application Developer',
          workPlace: 'DP Labs (DP Technology)',
          specialities: ['ASP.NET', 'Vue.js', 'MS SQL Server', 'Elasticsearch', 'Lucene'],
        },
        {
          startDate: new Date('2015-10-01'),
          position: 'Full Stack Developer',
          workPlace: 'Rubius',
          specialities: ['ASP.NET', 'C#', 'SQL Server', 'Postgres'],
        },
      ];
    },
  },
};
</script>
