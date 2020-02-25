<template>
    <q-item>
        <q-item-section avatar>
            <q-icon :name="icon" />
        </q-item-section>
        <q-item-section>
            <q-item-label>
                {{ title }}
            </q-item-label>
            <q-item-label caption>
                <a v-if="reference" :href="reference" >
                    {{ label }}
                </a>
                <span v-else>
                    {{ label }}
                </span>
            </q-item-label>
        </q-item-section>
    </q-item>
</template>

<script>
export default {
  props: {
    icon: {
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    label: {
      required: true,
    },
    reference: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
