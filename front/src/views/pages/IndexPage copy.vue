<template>
    <ion-page>
        <ion-header>
            <!-- <div class="container-fluid p-3 text-white text-center" style="background-color: #269d2f">-->
            <div class="container-fluid row p-3" style="background-color: #F07D0A ">
                <div class="col-lg-2 col-md-2 col-xs-12 col-sm-12">
                    <img src="../../../public/assets/wahid--.png" class="rounded-circle " alt="PHOTO"
                        style="width: 140px; height: 140px;" />
                    <p style="font-size: small; font-style: oblique; font-weight: bold;" class="text-center">

                        <!-- ->alpariss90@gmail.com
                        ->dev@alapriss.net
                        ->0022780728769 Niamey /Niger-->
                    </p>

                </div>
                <div class="col-lg-10 col-md-10 col-xs-12 col-sm-12  text-center" style="font-weight: bold;">
                    <p style="font-size: large;">Assoumane Alparissou ABDOUL WAHIDOU {{ lang }}</p>
                   
                    <p style="font-style: italic;" v-html="eng.profil" v-if="lang=2"></p>
                    <p style="font-style: italic;" v-html="fr.profil" v-if="lang=1"></p>
                    <a href="www.linkedin.com/in/assoumane-alparissou-abdoul-wahidou-167a66110" target="_blank">LinkedIn</a>
                    | +22780728769 / +22787512352 |
                    alpariss90@gmail.com | dev@alpariss.net |
                    <a href="https://github.com/alpariss90" target="_blank">GitHub</a> <br />
                    JavaScript | CSS | HTML | MSSQL | Node | Express | POSTGRESSQL | VueJs | Ionic | jQuery | NoSQL | Git |
                    Java | SCALA | Python | C++ | C |
                    AWS EC2 | Cloud Computing | Cucumber | Unit Testing | OOP | Windows | Linux | Docker | ODK | KOBO
                    TOOLBOX | StatEduc
                    | CSPRO | QGIS | Play Framework| Frontend | Backend
                </div>
            </div>

        </ion-header>
        <ion-content :fullscreen="true">
            <div class="container-fluid" style="text-align: justify;">
                <p class="res" v-html="fr.titre_1" v-if="lang=1"></p>
                <p class="res" v-html="eng.titre_1" v-if="lang=2"></p>
               
                <span v-html="fr.resume_p1" v-if="lang=1"></span>
                <span v-html="eng.resume_p1" v-if="lang=2"></span>
                 <button
                    class="btn btn-link" v-on:click="resume = true" v-if="!resume">
                    <span v-html="fr.resume_plus" v-if="lang=1"></span>
                    <span v-html="eng.resume_plus" v-if="lang=2"></span>
                </button><br />
                <span v-if="resume">
                    <span v-html="fr.resume_p2" v-if="lang=1"></span>
                    <span v-html="eng.resume_p2" v-if="lang=2"></span>
                    <span v-html="fr.resume_p3" v-if="lang=1"></span>
                    <span v-html="eng.resume_p3" v-if="lang=2"></span>
                    <span v-html="fr.resume_p4" v-if="lang=1"></span>
                    <span v-html="eng.resume_p4" v-if="lang=2"></span>
                    <span v-html="fr.resume_p5" v-if="lang=1"></span>
                    <span v-html="eng.resume_p5" v-if="lang=2"></span>
                    <button class="btn btn-link" v-on:click="resume = false" v-if="resume">
                        <span v-html="fr.resume_red" v-if="lang=1"></span>
                    <span v-html="eng.resume_red" v-if="lang=2"></span>
                    </button>
                </span>
                <hr />

                <p class="res" v-html="fr.titre_2" v-if="lang=1"></p>
                <p class="res" v-html="eng.titre_2" v-else-if="lang=2"></p>
                
                <table class="table table-bordered" style="background: red !important;">
                    <thead>
                        <tr>
                            <th>X</th>
                            <th>Angalis</th>
                            <th>Français</th>
                            <th>Arabe</th>
                            <th>Haussa</th>
                            <th>Zerma</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-html="fr.langue_op1" v-if="lang=1"></td>
                            <td v-html="eng.langue_op1" v-else-if="lang=2"></td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar" style="width:100%"></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar" style="width:100%"></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar" style="width:100%"></div>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td v-html="fr.langue_op2" v-if="lang=1"></td>
                            <td v-html="eng.langue_op2" v-else-if="lang=2"></td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar" style="width:80%"></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar" style="width:100%"></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar" style="width:75%"></div>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td v-html="fr.langue_op3" v-if="lang=1"></td>
                            <td v-html="eng.langue_op3" v-else-if="lang=2"></td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar" style="width:60%"></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar" style="width:100%"></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar" style="width:75%"></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar" style="width:100%"></div>
                                </div>
                            </td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar" style="width:100%"></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <p class="res" v-html="fr.titre_5" v-if="lang=1"></p>
                <p class="res" v-html="eng.titre_5" v-else-if="lang=2"></p>
                <span v-html="fr.domaine_comp" v-if="lang=1"></span>
                <span v-html="eng.domaine_comp" v-else-if="lang=2"></span>
                <hr />
                <p class="res" v-html="fr.titre_3" v-if="lang=1"></p>
                <p class="res" v-html="eng.titre_3" v-else-if="lang=2"></p>
             
                <table class="" >
                    <thead v-if="lang=1">
                      <tr v-for="f in fr.exps" v-bind:key="f.tech">
                        <td v-html="f.date"></td>
                        <td v-html="f.titre"></td>
                        <td>
                            <p v-for="l in f.institution" v-bind:key="l.t1">
                                <span v-html="l"></span>
                            </p>
                        </td>
                        <td>
                           <p v-for="ff in f.taches" v-bind:key="ff.t1">
                              {{ ff }}
                            </p>
                        </td>
                        <td v-html="f.tech"></td>
                      </tr>
                    </thead>


                    <thead v-else-if="lang=2">
                      <tr v-for="f in eng.exps" v-bind:key="f.tech">
                        <td v-html="f.date"></td>
                        <td v-html="f.titre"></td>
                        <td>
                            <p v-for="l in f.institution" v-bind:key="l.t1">
                                <span v-html="l"></span>
                            </p>
                        </td>
                        <td>
                           <p v-for="ff in f.taches" v-bind:key="ff.t1">
                              {{ ff }}
                            </p>
                        </td>
                        <td v-html="f.tech"></td>
                      </tr>
                    </thead>


                </table>


                <hr />
                <p class="res" v-html="fr.titre_6" v-if="lang=1"></p>
                <p class="res" v-html="eng.titre_6" v-else-if="lang=2"></p>
                <table class="">
                    <thead  v-if="lang=1">
                        <tr v-for="ff in fr.refs" v-bind:key="ff">
                            <td>{{ ff.nom }}</td><td>{{ ff.poste }}</td><td>{{ ff.contact }}</td>
                        </tr>
                    </thead>

                    <thead  v-if="lang=2">
                        <tr v-for="ff in eng.refs" v-bind:key="ff">
                            <td>{{ ff.nom }}</td><td>{{ ff.poste }}</td><td>{{ ff.contact }}</td>
                        </tr>
                    </thead>

                 
                    </table>
            </div>


        </ion-content>
        <ion-footer>
            <ion-toolbar>
                <ion-title style="text-align: center; font-size: 20px; color: black; font-weight: bold;">
                    ABDOUL WAHIDOU Assoumane Alparissou
                </ion-title>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<script>
import { IonFooter, IonTitle, IonToolbar, IonPage, IonContent, IonHeader } from '@ionic/vue'

import { defineComponent, computed, reactive, toRefs, onMounted } from 'vue';
import data from './data'
//import service from '../services/service';


export default defineComponent({
    name: 'indexPage',
    components: {
        IonContent, IonHeader,
        IonFooter, IonTitle, IonToolbar, IonPage
    },
    setup() {

        /***
         * Data
         */
        const state = reactive({
            regionReceived: 0,
            departementReceived: 0,
            communeReceived: 0,
            zdReceived: 0,
            resume: false,
            eng:{},
            fr:{},
            lang: 55
        })



        /***
         * Methods
         */
        const getFormChild = (filtre) => {
            state.regionReceived = filtre.region
            state.departementReceived = filtre.dep
            state.communeReceived = filtre.com
            state.zdReceived = filtre.zd
        }



        /***
         * Computeds
         */
        const c_regionRec = computed(() => {
            return state.regionReceived
        })

        onMounted(()=>{
           // let d=JSON.parse(data)
            state.eng=data[0].eng
            state.fr=data[0].fr

            //console.log(data[0].fr);
        })




        return { getFormChild, ...toRefs(state), c_regionRec }
    }
})
</script>
<style scoped>
table,
td,
th {
    border: 1px solid black;
}

table {
    border-collapse: collapse;
    width: 100%;
}

td {
    height: 50px;
    vertical-align: center;
    text-align: justify;
    padding-left: 3px;
    padding-right: 3px;
}



ion-content {
    --padding-top: 10px;
    min-height: 100px;
}

ion-toolbar {
    --color: red;
    --background: #269d2f;

}

.center {
    justify-content: center;
    align-items: center;
    text-align: justify;

}

.table-bordered tbody tr:nth-of-type(odd) {
    background-color: coral !important;
}

.res {
    color: #269d2f;
    font-weight: bold;
    font-style: oblique;
    font-size: larger;
}

.td {
    height: 50px;
    vertical-align: center;
}</style>