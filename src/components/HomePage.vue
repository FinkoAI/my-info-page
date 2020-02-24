<template>
    <div class="row justify-center">
        <div class="col-12 col-md-8">
            <q-card flat bordered>
                <q-card-section horizontal>
                    <img
                        class="col-5"
                        src="../assets/avatar.png"
                    />
                    <q-card-section>
                        <h1> {{`I'm `}} <b>{{ fullName }}</b></h1>
                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: 'Anton Finko',
    };
  },
};
</script>
