<template>
  <div>
    <b-card
      :img-src="eventInfo.mediaLink.cover"
      :img-alt="eventInfo.mediaLink.host[0]"
      style="color: white; background: black;"
      img-top
      class="mb-2"
    >
      <div class="img-display">
        <img
          v-if  = "eventInfo.mediaLink.host[0]"
          :src  = "eventInfo.mediaLink.host[0]"/>
        <img
          v-if  = "eventInfo.mediaLink.host[1]"
          :src  = "eventInfo.mediaLink.host[1]"/>
        <img
          v-if  = "eventInfo.mediaLink.host[2]"
          :src  = "eventInfo.mediaLink.host[2]"/>
        <span
          class = "img-add"
          v-if  = "eventInfo.mediaLink.host.length + eventInfo.mediaLink.users.length - 3 > 0"
        > +{{ eventInfo.mediaLink.host.length + eventInfo.mediaLink.users.length - 3 }} </span>
      </div>
      <div class="badge-display mb-2">
        <b-badge pill variant="light">{{ eventInfo.eventTags.host[0] }}</b-badge>
        <b-badge pill variant="light">{{ eventInfo.eventTags.host[1] }}</b-badge>
        <b-badge pill variant="light">{{ eventInfo.eventTags.host[2] }}</b-badge>
      </div>
      <b-card-text>
        <h4 class="card-title">{{ eventInfo.pub.name }}</h4>
        <div class="card-location">
          <img src="../../assets/icons/location.png" alt="" class="location-icon">
          <p class="card-location-text">{{ eventInfo.pub.venue }}</p>
        </div>
        <div class="card-body-rating">
          <ul>
            <li v-for="n in eventInfo.pub.rating">
              <img src="../../assets/icons/star.png" alt="">
            </li>
            <li v-for="n in (5 - eventInfo.pub.rating)">
              <img src="../../assets/icons/star-hollow.png" alt="">
            </li>
          </ul>
        </div>
        <div class="card-body-description">
          <h5>OVERVIEW</h5>
          <div class="card-body-time">
            <p> {{ eventInfo.pub.date }}, {{ eventInfo.pub.time }}</p>
          </div>
          <div class="card-body-overview">
            <p v-if="snipped"> {{ eventInfo.pub.description | snippet }}</p>
            <p v-else> {{ eventInfo.pub.description }}</p>
          </div>
          <p class="card-body-description-rm" @click="snipped = false" v-show="snipped">Read More</p>
        </div>
        <div>{{ }}</div>
      </b-card-text>

      <b-button
        v-if="eventInfo.ticketLink !== null"
        :href="eventInfo.ticketLink"
        target="_blank"
        variant="primary"
      >Buy tickets!</b-button>

      <hr />

    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        snipped: true,
      }
    },

    name: "EventCardPopup",
    props: {
      eventInfo: Object
    },

    trigger: function() {
      this.$emit('trigger');
    },

    filters: {
      snippet(value){
        if (value.length > 200) {
          return value.slice(0, 200) + '...';
          this.snipped = true;
        } else {
          this.snipped = false;
        }
      }
    },
    methods: {
    },
    computed: {

    }
  }
</script>

<style lang="scss" scoped>
.background-blur {
  background: white;
  opacity: 0.7;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 0;
}
</style>
