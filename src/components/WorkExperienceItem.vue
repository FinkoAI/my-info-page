<template>
    <q-timeline-entry
        :title="position"
        :subtitle="formatedStartDate"
    >
      <q-card>
        <q-card-section>
          <div class="text-h5">
              {{ workPlace }}
          </div>
        </q-card-section>
        <q-card-section v-if="specialities && specialities.length > 0">
          <div class="text-h6">
              {{ 'Specialities: ' }}
              <span class="q-gutter-md">
                <q-badge
                  outline
                  v-for="(speciality, index) in specialities"
                  :key="index"
                  :label="speciality"
                  color="primary"
                />
              </span>
          </div>
        </q-card-section>
      </q-card>
    </q-timeline-entry>
</template>

<script>
import dateFilters from '@/filters/date-filters';

export default {
  props: {
    startDate: {
      required: true,
      type: Date,
    },
    position: {
      required: true,
      type: String,
    },
    workPlace: {
      required: true,
      type: String,
    },
    shortDescription: {
      required: false,
      type: String,
    },
    specialities: {
      required: false,
      type: Array,
    },
    responsibilities: {
      required: false,
      type: Array,
    },
    achievements: {
      required: false,
      type: Array,
    },
  },
  computed: {
    formatedStartDate() {
      return dateFilters.formatDate(this.startDate, 'MMM, YYYY');
    },
  },
};
</script>
