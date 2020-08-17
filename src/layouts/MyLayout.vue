<template>
  <div class="WAL position-relative bg-grey-4" :style="style">
    <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
      <q-header v-if='user.Nombre' elevated>
        <q-toolbar class="bg-grey-3 text-black">
          <q-btn
            round
            flat
            icon="keyboard_arrow_left"
            class="WAL__drawer-open q-mr-sm"
            @click="leftDrawerOpen = true"
          />

          <q-btn round flat>
            <q-avatar>
              <img :src="currentConversation.userImg">
            </q-avatar>
          </q-btn>

          <span class="q-subtitle-1 q-pl-md">
            {{ currentConversation.Nombre }}
          </span>

          <q-space/>

          <q-btn round flat icon="search" />
          <q-btn round flat>
            <q-icon name="attachment" class="rotate-135" />
          </q-btn>
          <q-btn round flat icon="more_vert">
            <q-menu auto-close :offset="[110, 0]">
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>Contact data</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Block</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Select messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Silence</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click='clearMessages'>Clear messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Erase messages</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer v-if='user.Nombre'
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        :breakpoint="690"
      >
        <q-toolbar class="bg-grey-3">
          <q-avatar class="cursor-pointer">
            <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
          </q-avatar>

          <q-avatar class="cursor-pointer">
            <img :src="user.userImg" />
            <q-menu auto-close :offset="[-35, 8]">
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>New group</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Profile</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Archived</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Favorites</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="Logout()">Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-avatar>

          <q-item-section>
            <q-item-label>
              {{ user.Nombre}}
            </q-item-label>
          </q-item-section>

          <q-space />

          <q-btn round flat icon="more_vert">
            <q-menu auto-close :offset="[110, 8]">
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>New group</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Profile</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Archived</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Favorites</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section @click="Logout()">Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn
            round
            flat
            icon="close"
            class="WAL__drawer-close"
            @click="leftDrawerOpen = false"
          />
        </q-toolbar>

        <q-toolbar class="bg-grey-2">
          <q-input rounded outlined dense class="WAL__field full-width" bg-color="white" v-model="search" placeholder="Search or start a new conversation">
            <template slot="prepend">
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar>

        <q-scroll-area style="height: calc(100% - 100px)">
          <q-list>
            <q-item
              v-for="(conversation, index) in users"
              :key="conversation.id"
              clickable
              v-ripple
              @click="currentConversationIndex = index"
            >
              <q-item-section avatar>
                <q-avatar>
                  <img :src="conversation.userImg">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">
                  {{ conversation.Nombre }}
                </q-item-label>
                <q-item-label class="conversation__summary" caption>
                  <q-icon name="check" v-if="conversation.sent" />
                  <q-icon name="not_interested" v-if="conversation.deleted" />
                  {{ index }}
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge @click='go(key)'
                  :color="conversation.online ? 'light-primary-5' : 'grey-4'">
                  {{ conversation.online ? 'Online' : 'Offline' }}
                </q-badge>
              </q-item-section>

            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>
      
    </q-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'WhatsappLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      message: '',
      currentConversationIndex: 'nax',
      conversations: [
        {
          id: 1,
          Nombre: 'Razvan Stoenescu',
          userImg: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
          caption: 'I\'m working on Quasar!',
          time: '15:00',
          sent: true
        },
        {
          id: 2,
          Nombre: 'Dan Popescu',
          userImg: 'https://cdn.quasar.dev/team/dan_popescu.jpg',
          caption: 'I\'m working on Quasar!',
          time: '16:00',
          sent: true
        },
        {
          id: 3,
          Nombre: 'Jeff Galbraith',
          userImg: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
          caption: 'I\'m working on Quasar!',
          time: '18:00',
          sent: true
        },
        {
          id: 4,
          Nombre: 'Allan Gaunt',
          userImg: 'https://cdn.quasar.dev/team/allan_gaunt.png',
          caption: 'I\'m working on Quasar!',
          time: '17:00',
          sent: true
        },
        {
          id: 5,
          Nombre: 'asdMan',
          userImg: 'https://instagram.fscl19-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/94551501_232252087835718_1265881648790134351_n.jpg?_nc_ht=instagram.fscl19-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=XtI0z4VsXmQAX9bi8_h&oh=02aa4c653015b33953e367534afd1218&oe=5F656416',
          caption: 'I\'m working on Quasar!',
          time: '17:00',
          sent: true
        }
      ]
    }
  },
  computed: {
    user() {
      return this.$store.state.store.user;
    },
    currentConversation () {
      return this.users[this.currentConversationIndex]
    },
    users() {
      /*if (localStorage.users) {
          return JSON.parse(localStorage.users);
      } else {
          localStorage.users = JSON.stringify(this.$store.state.store.users);
          return this.$store.state.store.users;
      }*/
      return this.$store.state.store.users;
    },
    style () {
      return {
        height: this.$q.screen.height + 'px'
      }
    }
  },
  methods: {
    ...mapActions('store',['Logout', 'clearMessages'])
  }
}
</script>

