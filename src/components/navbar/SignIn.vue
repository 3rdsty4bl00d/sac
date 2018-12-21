<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 md6 offset-md3 offset-sm2>
        <v-card>
          <v-container>
            <v-layout row>
              <v-flex xs12>
                <form>
                  <v-text-field label="Email" color="black--text" type="email"></v-text-field>
                  <v-text-field label="Password" color="black--text" type="password"></v-text-field>
                  <v-layout row>
                    <v-flex class="text-xs-center text-sm-center text-md-center">
                      <v-btn>Submit</v-btn>
                    </v-flex>
                  </v-layout>
                  <v-divider class="mt-2 mb-2"></v-divider>
                  <v-layout row>
                    <v-flex class="text-xs-center text-sm-center text-md-center">
                      <v-btn>Already have an account?</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
</style>
