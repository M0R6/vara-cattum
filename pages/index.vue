<template>
   <v-app class="josefin-slab">
      
      <nav height="100%">
         <!-- <template v-slot:title> -->
            <v-card id="Home" elevation="0" class="">
               <v-card width="75%" elevation="0" class="cursor-pointer mx-auto bg-transparent d-flex">
                  <h1 class="align-center mx-auto text-3xl my-5 text-[#9D2D3E]">Vara Cattum</h1>
               </v-card>
               <div class="d-flex">
                  <v-card elevation="0" class="d-flex mx-auto bg-transparent justify-space-between flex-wrap" width="30%">
                     <div @click="this.$router.push('/#Home')" class="cursor-pointer d-flex hover:opacity-50 ma-1">
                        <v-icon icon="mdi-home" size="36px" class="mr-1 align-content-center"></v-icon>
                        <h1 class="text-xl align-content-end ml-1 hide-on-small">Beranda</h1>
                     </div>
                     <div @click="this.$router.push('/#Catalog')" class="cursor-pointer d-flex hover:opacity-50 ma-1">
                        <v-icon icon="mdi-book-open-page-variant-outline" size="36px" class="mr-1 align-content-center"></v-icon>
                        <h1 class="text-xl align-content-end ml-2 hide-on-small">Katalog</h1>
                     </div>
                     <div @click="this.$router.push('/#Location')" class="cursor-pointer d-flex hover:opacity-50 ma-1">
                        <v-icon icon="mdi-google-maps" size="36px" class="mr-1 align-content-center"></v-icon>
                        <h1 class="text-xl align-content-end hide-on-small">Lokasi</h1>
                     </div>
                     <div @click="this.$router.push('/#Contact')" class="cursor-pointer d-flex hover:opacity-50 ma-1">
                        <v-icon icon="mdi-phone-classic" size="36px" class="mr-1 align-content-center"></v-icon>
                        <h1 class="text-xl align-content-end hide-on-small ml-2">Kontak</h1>
                     </div>
                     <!-- <v-btn variant="text" prepend-icon="mdi-whatsapp"><h1>Contact us</h1></v-btn> -->
                  </v-card>
               </div>
            </v-card>
         <!-- </template> -->
      </nav>

      <v-main>
         <v-container fluid>
      <v-card class="mx-2" elevation="0">
         <v-row class="d-flex justify-center align-content-end mt-2">
            <v-col cols="12">
               <h1 class="text-4xl text-center mb-2 font-bold">Selamat datang di situs resmi Vara Catering dan Tumpeng.</h1>
               <h2 class="text-3xl text-center">Ahli makanan catering dan tumpengan andalan di Sewon!</h2>
            </v-col>
         </v-row>
         <v-row class="d-flex justify-center align-center pt-0">   
         <v-col  cols="12" md="4" xs="12">
         <v-card style="background-color: #9D2D3E" class="ma-2 d-flex" height="500px" variant="outlined">
            <div class="my-auto">
               <v-card-title class="text-center text-wrap">
                  <h1 class="text-3xl text-white text-bold pb-4 text-uppercase">Mari rasakan kenikmatan olahan dapur Vara Cattum!</h1>
                  <h1 class="text-2xl text-white text-bold">Nikmati berbagai hidangan nusantara berkualitas, dibuat dengan sepenuh hati seperti masakan Ibu.</h1>
               </v-card-title>
            </div>
         </v-card>
         </v-col>
         <v-col cols="12" md="8" xs="12">
            <v-card class="ma-2 d-flex justify-center align-center" max-height="500px" variant="outlined">
               <img src="~/assets/img/1.jpg" style="object-fit: cover; height: 100%; width: 100%;">
            </v-card>
         </v-col>
         </v-row>
         <v-card class="mx-2 my-4 py-4 px-0" id="Catalog" elevation="0">
               <v-row class="mx-auto">
                  <v-col cols="12" class="d-flex flex-wrap justify-center mx-auto">
                     <h1 class="text-3xl text-center mr-2">Menu Unggulan</h1>
                     <v-chip class="cursor-pointer" color="success"><v-icon class="mr-1" size="22">mdi-file</v-icon><h1 class="align-content-end text-xl font-extrabold">Katalog Lengkap</h1></v-chip>
                  </v-col>
                  <v-col
                  v-for="item in items"
                  :key="item.id"
                  cols="12"
                  sm="6"
                  md="4"
                  class="mb-3 mx-auto"
                  >
                  <v-dialog width="90%" height="90%" v-model="openImage">
                     <v-card class="pb-4">
                        <div class="d-flex justify-space-between pa-2">
                           <h1>{{ selectedTitle }}</h1>
                           <v-icon @click="openImage = false" size="32" class="cursor-pointer">mdi-close</v-icon>
                        </div>
                        <v-img
                           :src="selectedImage"
                           height="100%"
                           width="100%"
                        >
                        </v-img>
                     </v-card>
                  </v-dialog>
                  <v-card color="#D7D1CC" class="rounded-lg mx-3" elevation="10">
                     <v-card elevation="0" max-height="300px" class="bg-transparent d-flex justify-center align-center">
                        <v-img
                           :src="item.image"
                           height="100%"
                           width="100%"
                           class="object-cover"
                           @click="openDialog(item.image, item.title)"
                        >
                        </v-img>
                        <v-tooltip activator="parent" location="bottom">Click to see photo</v-tooltip>
                     </v-card>
                     <v-card-title class="pb-0"><h1 class="text-3xl text-black mt-2 text-center text-wrap">{{ item.title }}</h1></v-card-title>
                     <v-card-subtitle><h1 class="text-2xl mt-0 text-black text-center text-wrap">{{ item.subtitle }}</h1></v-card-subtitle>
                     <v-btn href="https://api.whatsapp.com/send?phone=6289602169000&text=Halo,%20Vara%20Cattum%20" target="_blank" class="rounded-xl text-black w-[160px] mb-3 d-flex mx-auto my-2" variant="outlined" color="black"><v-icon class="mr-2">mdi-cart-outline</v-icon><h1>Pesan</h1></v-btn>
                  </v-card>
                  </v-col>
               </v-row>
         </v-card>
         <v-card class="mx-2 my-5 py-4 px-0" elevation="0" id="Location">
            <v-row>
               <v-col cols="12" class="d-flex mx-auto justify-center">
                  <v-icon size="30" class="align-middle mr-2">mdi-google-maps</v-icon>
                  <h1 class="text-3xl text-center">Info Lokasi Vara Cattum</h1>
               </v-col>
               <v-col class="" cols="12" md="4">
                  <v-card height="100%" color="#9D2D3E" class="align-content-center mx-auto pa-3" elevation="0">
                     <v-card-title class="text-center"><h1 class="text-3xl text-wrap">Dapur produksi Vara Cattum berlokasi di Tarudan, Sewon, Bantul, Daerah Istimewa Yogyakarta.</h1></v-card-title>
                      <v-btn href="https://maps.app.goo.gl/jdqnhZxQnRACLP4M7" target="_blank" rounded="xl" class="d-flex my-3 mx-auto text-none w-auto"><v-icon size="28" class="mr-2">mdi-google-maps</v-icon><span class="text-xl font-extrabold">Lihat Google Maps</span></v-btn>
                  </v-card>
               </v-col>
               <v-col cols="12" md="8">
                  <v-card class="mx-auto" elevation="0">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2026939.3877801052!2d107.87675731595537!3d-7.1414910967320155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a564f2d4bfae9%3A0xaa604ac2ab768240!2sBengkel%20Modifikasi%20Motor%20%22SILUMAN%20SPEED%22!5e0!3m2!1sid!2sid!4v1734187466656!5m2!1sid!2sid" style="border:0; width: 100%; height: 300px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </v-card>
               </v-col>
            </v-row>
         </v-card>
         <v-card class="mx-2 my-5 py-6 px-0" elevation="0" color="black" id="Contact">
            <v-row>
               <v-col cols="12" class="d-flex justify-center">
                  <v-icon size="30" class="align-middle mr-2">mdi-phone-classic</v-icon>
                  <h1 class="text-3xl text-center">Kontak kami</h1>
               </v-col>
               <v-col cols="12">
                  <v-card width="80%" elevation="0" color="transparent" class="d-flex mx-auto justify-space-around flex-wrap">
                     <a href="https://instagram.com/varacattum.id/" target="_blank">
                        <div class="d-flex cursor-pointer">
                           <v-icon class="my-auto mr-2">mdi-instagram</v-icon>
                           <h1 class="text-2xl hide-on-small">@varacattum.id</h1>
                        </div>
                     </a>
                     <a href="https://instagram.com/varacattum.id/" target="_blank">
                        <div class="d-flex cursor-pointer">
                           <v-icon class="my-auto mr-2">mdi-facebook</v-icon>
                           <h1 class="text-2xl hide-on-small">Vara Cattum</h1>
                        </div>
                     </a>
                     <a href="https://instagram.com/varacattum.id/" target="_blank">
                        <div class="d-flex cursor-pointer">
                           <v-icon class="my-auto mr-2">mdi-email</v-icon>
                           <h1 class="text-2xl hide-on-small">Vara Cattum</h1>
                        </div>
                     </a>
                     <a href="tel:+62896-0216-9000" target="_blank">
                        <div class="d-flex cursor-pointer">
                           <v-icon class="my-auto mr-2">mdi-whatsapp</v-icon>
                           <span class="my-auto">/</span>
                           <v-icon class="my-auto mx-2">mdi-phone-classic</v-icon>
                           <h1 class="text-2xl hide-on-small">+62 896-0216-9000</h1>
                        </div>
                     </a>
                  </v-card>
               </v-col>
            </v-row>
         </v-card>
      </v-card>

      <a href="https://api.whatsapp.com/send?phone=6289602169000&text=Halo,%20Vara%20Cattum%20" target="_blank">
      <v-btn
        color="#128C7E"
        class="d-flex mb-2 pa-3 align-content-center text-none"
        style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;"
        height="auto"
        location="bottom end"
      ><v-icon class="mr-1" size="38">mdi-whatsapp</v-icon><h1 class="hide-on-small text-2xl font-bold align-content-end">Hubungi Kami!</h1></v-btn>
      </a>
   </v-container>
   </v-main>
   <footer>
      <v-card rounded="0" elevation="0" color="black" class="pa-4">
         <a href="https://morgann.me/" target="_blank" class="d-flex justify-center">
            <h1 class="text-xl text-right my-auto">Curated<br>by</h1>
            <v-avatar size="55" class="ml-3" rounded="0" image="https://res.cloudinary.com/duboggqno/image/upload/v1722477439/My%20Brand/icon_nylgcy.png"></v-avatar>
         </a>
      </v-card>
   </footer>
   </v-app>
</template>

<style scoped>
@media (max-width: 600px) {
  .hide-on-small {
    display: none;
  }
}
</style>

<script>
export default {
   data() {
      return {
         selectedImage: '',
         selectedTitle: '',
         openImage: false,
         items: [
        {
          id: 1,
          title: 'Tumpeng - A',
          subtitle: 'Hidangan Khas Indonesia',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416594/nasitumpeng_oacnjb.jpg', // replace with actual image URLs
        },
        {
          id: 2,
          title: 'Tumpeng - B',
          subtitle: 'Nasi tumpeng jenis B',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416792/nasitumpengg_cxobbh.jpg',
        },
        {
          id: 3,
          title: 'Tumpeng - C',
          subtitle: 'Hidangan Khas Indonesia',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416790/nasitumpenggg_szrrpo.jpg', // replace with actual image URLs
        },
        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
        },        
        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
        },        
        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
        },        
        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
        },        
        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
        },        
        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
        },
      ],
      }
   },
   methods: {
      openDialog(image, title) {
      this.selectedImage = image;
      this.selectedTitle = title;
      this.openImage = true;
    }
   }
}
</script>
