<template>
  <div id="base_register">
    <v-app id="container">
      <v-form
        ref="meetingApplierForm"
        :model="meetingApplierForm"
        :rules="rules"
        class="register_container"
        label-position="left"
        label-width="0px"
      >
        <h3>
          Apply for meeting
        </h3>
        <v-text-field
          v-model="meetingApplierForm.meetingName"
          type="text"
          label="meeting Name"
          hint="Specify the meeting name, such as '12th International meeting on Logic for Programming, Artificial Intelligence, and Reasoning'. Make sure it is properly capitalized, that is do not use 'INTERNATIONAL meeting' or 'international meeting'."
          :rules="[rules.required]"
          :validate-on-blur="true"
        >
        </v-text-field>
        <v-text-field
          v-model="meetingApplierForm.acronym"
          type="text"
          label="acronym"
          hint="If your converence has no acronym, invent a reasonably short one

If you are not sure what the acronym (abbreviation) is, you can use first letters from every word in the meeting name.

The acronym must contain at least one digit and at least one non-digit.

If the acronym has no digit, you can always add the meeting number or the year at the end. For example, use 'ABC-25' or 'ABC 2020' rather than 'ABC'. Please make sure that the acronym is properly capitalized, for example, use 'ABC 2020' rather than 'abc 2020'.-32 characters  consisting of letters/numbers/special characters(-_), at least two categories above and must not contain your username"
          :rules="[rules.required()]"
          :validate-on-blur="true"
        ></v-text-field>
        <v-text-field
          v-model="meetingApplierForm.city"
          type="text"
          label="venue"
          :rules="[rules.required]"
          :validate-on-blur="true"
        ></v-text-field>
        <v-text-field
          v-model="meetingApplierForm.venue"
          type="text"
          label="city"
          :rules="[rules.required]"
          :validate-on-blur="true"
        ></v-text-field>
        <v-col
          class="d-flex"
          cols="12"
          sm="6"
        >
          <v-select
            :items="regions"
            label="region"
            dense
            outlined
          ></v-select>
        </v-col>
        <v-row
          justify="left"
        >
          <!--          暂时没有完成date range-->
          <v-date-picker
            v-model="date"
            :allowed-dates="allowedDates"
            class="mt-4"
            min="2020-03-21"
            max="2030-03-21"
          >
          </v-date-picker>
        </v-row>
        <v-text-field
          v-model="meetingApplierForm.primaryArea"
          type="text"
          label="Primary Area"
          :rules="[rules.required]"
          :validate-on-blur="true"
        ></v-text-field>
        <v-text-field
          v-model="meetingApplierForm.secondaryArea"
          type="text"
          label="Secondary Area"
          :rules="[rules.required]"
          :validate-on-blur="true"
        ></v-text-field>
        <v-text-field
          v-model="meetingApplierForm.areaNotes"
          type="text"
          label="Area Notes"
          :rules="[rules.required]"
          :validate-on-blur="true"
        ></v-text-field>
        <v-text-field
          v-model="meetingApplierForm.organizer"
          type="text"
          label="organizer"
          :rules="[rules.required]"
          :validate-on-blur="true"
        ></v-text-field>
        <v-text-field
          v-model="meetingApplierForm.webPage"
          type="text"
          label="webPage"
          :rules="[rules.required]"
          :validate-on-blur="true"
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label='I confirm that I have read and understood Policy On Conferences Using EasyChair and have informed, or will inform, the relevant conference organisers about this policy'
          required
        >
        </v-checkbox>
        <div>
          <v-btn
            id="submit"
            style="width: 50%;border: none"
            v-on:click="register(meetingApplierForm)"
          >APPLY FOR MEETING
          </v-btn>
        </div>

      </v-form>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'meetingApplier',
    data () {
      return {
        regions: ['a', 'b', 'c', 'd'],
        meetingApplierForm: {
          meetingName: '',
          acronym: '',
          date: '',
          region: '',
          city: '',
          venue: '',
          primaryArea: '',
          secondaryArea: '',
          areaNotes: '',
          organizer: '',
          webPage: '',
        },
        rules: {
          required: value => !!value || 'This field is required.',
        },
        loading: false,
      }
    },
    methods: {
      maxDate () {
        var date = new Date()
        console.log(date.getFullYear() + 10 + '-0' + date.getMonth() + '-' + date.getDay())
        return date.getFullYear() + 10 + '-' + date.getMonth() + '-' + date.getDay()
      },
      minDate () {
        var date = new Date()
        console.log(date.getVarDate())
        return date.getVarDate()
      },
      allowedDates (val) {
        var date = new Date()
        var year = parseInt(val.split('-')[0], 10)
        var month = parseInt(val.split('-')[1], 10)
        var day = parseInt(val.split('-')[2], 10)
        if (year > date.getFullYear() + 10 || year < date.getFullYear()) return false
        if (year === date.getFullYear() + 10 && month > date.getMonth()) return false
        if (year === date.getFullYear() && month < date.getMonth()) return false
        if (year === date.getFullYear() && month === date.getMonth() && day < date.getDay()) return false
        if (year === date.getFullYear() + 10 && month === date.getMonth() && day > date.getDay()) return false
        return true
      },
      register (formName) {
        if (!this.$refs.meetingApplierForm.validate()) return false
        this.$axios.post('http://localhost:8080/register', {
          meetingName: this.meetingApplierForm.meetingName,
          acronym: this.meetingApplierForm.acronym,
          venue: this.meetingApplierForm.venue,
          city: this.meetingApplierForm.city,
          region: this.meetingApplierForm.region,
          date: this.meetingApplierForm.date,
          primaryArea: this.meetingApplierForm.primaryArea,
          secondaryArea: this.meetingApplierForm.secondaryArea,
          areaNotes: this.meetingApplierForm.areaNotes,
          organizer: this.meetingApplierForm.organizer,
          webPage: this.meetingApplierForm.webPage,
        })
          .then(resp => {
            console.log(resp)
            // 根据后端的返回数据修改
            if (resp.status === 200) {
              if (resp.data.responseMessage === 'success') {
                alert('Apply successfully')
                this.$router.replace('dashboard')
              }
            } else {
              alert('Apply error ' + resp.data.responseBody.reason)
            }
          })
          .catch(error => {
            console.log(error)
            alert('Apply error')
          })
      },
    },
  }
</script>
<style scoped>
</style>
