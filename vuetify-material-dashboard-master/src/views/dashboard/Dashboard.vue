<template>
  <v-container
    id="dashboard"
    fluid
  >
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
          >
            <v-card>
              <v-card-title class="display-3 font-weight-bold my-1 py-1">{{ item.meetingName }}</v-card-title>
              <v-card-subtitle class="display-2">{{ item.acronym }}</v-card-subtitle>
              <v-divider class="my-0 py-0"></v-divider>
              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Date:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.date }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>location:</v-list-item-content>
                  <v-list-item-content class="align-end"> {{ item.location.venue + ' ' + item.location.city + ' ' +
                    item.location.region }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>State:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{item.state}}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    name: 'DashBoardDashboard',
    data () {
      return {
        itemsPerPage: 4,
        items: [
          {
            // 名称，缩写
            meetingName: 'meeting in rz',
            acronym: 'cir',
            // 日期，地点
            date: 'Mar.20 ~ Mar.24',
            location: {
              region: 'CN',
              city: 'Shanghai',
              venue: 'fdu',
            },
            // 内容
            area: {
              primaryArea: 'SE',
              secondaryArea: 'SE',
              areaNotes: 'SoftwareEngineering',
            },
            // 组织者
            organizer: 'SE',
            webPage: 'fdu',
            // 角色
            role: 'chair',
            // 审核进行状态
            state: 'under review',
          },
          {
            meetingName: 'meeting in rz',
            acronym: 'cir',
            date: 'Mar.20 ~ Mar.24',
            location: {
              region: 'CN',
              city: 'Shanghai',
              venue: 'fdu',
            },
            area: {
              primaryArea: 'SE',
              secondaryArea: 'SE',
              areaNotes: 'SoftwareEngineering',
            },
            organizer: 'SE',
            webPage: 'fdu',
            role: 'chair',
            state: 'under review',
          },
          {
            meetingName: 'meeting in rz',
            acronym: 'cir',
            date: 'Mar.20 ~ Mar.24',
            location: {
              region: 'CN',
              city: 'Shanghai',
              venue: 'fdu',
            },
            area: {
              primaryArea: 'SE',
              secondaryArea: 'SE',
              areaNotes: 'SoftwareEngineering',
            },
            organizer: 'SE',
            webPage: 'fdu',
            role: 'chair',
            state: 'under review',
          },
          {
            meetingName: 'meeting in rz',
            acronym: 'cir',
            date: 'Mar.20 ~ Mar.24',
            location: {
              region: 'CN',
              city: 'Shanghai',
              venue: 'fdu',
            },
            area: {
              primaryArea: 'SE',
              secondaryArea: 'SE',
              areaNotes: 'SoftwareEngineering',
            },
            organizer: 'SE',
            webPage: 'fdu',
            role: 'chair',
            state: 'under review',
          },
        ],
      }
    },
  }
</script>
