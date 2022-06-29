<template>
    <div>
        <div>
            <v-app-bar color="#FFD700" dense dark>
                <v-toolbar-title>Cadastar novo Animal</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-app-bar>
        </div>
        <br>

        <v-row>
            <v-col cols="12" sm="8" offset-sm="2">
                <div class="field">
                    <label class="label"> Nome do Animal</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Nome do animal" v-model="nome"/>
                    </div>
                </div>
            </v-col>
        </v-row>

        
        <v-row>
            <v-col cols="12" sm="4" offset-sm="2">
                <span class="field">
                    <label class="label"> Tipo do Animal</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Cachorro ou Gato" v-model="tipo"/>
                    </div>
                </span>
            </v-col>
            <v-col cols="12" sm="4">
                <span class="field">
                    <label class="label"> Raça do Animal</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Raça do animal" v-model="raca"/>
                    </div>
                </span>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" offset-sm="2">
                <div class="field">
                    <label class="label"> Sexo do Animal</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Sexo do animal" v-model="sexo"/>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="4">
                <div class="field">
                    <label class="label"> Idade do Animal</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Idade do animal" v-model="idade"/>
                    </div>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" offset-sm="2">
                <div class="field">
                    <label class="label"> Tamanho do Animal</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Tamanho do animal" v-model="tamanho"/>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="4">
                <div class="field">
                    <label class="label"> Peso do Animal</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Peso do animal" v-model="peso"/>
                    </div>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" offset-sm="2">
                <div class="field">
                    <label class="label"> Castrado?</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Castrado?" v-model="castrado"/>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="4">
                <div class="field">
                    <label class="label"> Foto do Animal</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="URL da foto do animal" v-model="foto"/>
                    </div>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" offset-sm="2">
                <div class="text-center field">
                    <div class="control">
                        <v-btn class="button is-success" color="success" @click="inserirAnimal">
                            Gravar
                        </v-btn>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="4">
                <div class="text-center field">
                    <div class="control">
                        <v-btn class="button is-success" color="success" @click="cancelar">
                            Cancelar
                        </v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from "axios";

export default{
    name: 'AddAnimal',

    data() {
        return {
            nome: "",
            tipo: "",
            raca: "",
            sexo: "",
            idade: "",
            tamanho: "",
            peso: "",
            castrado: "",
            foto: "",
        };
    },

    methods: {
        async inserirAnimal() {
            try {
                this.sendFile();
                await axios.post("http://localhost:5000/animais", {
                    nome: this.nome,
                    tipo: this.tipo,
                    raca: this.raca,
                    sexo: this.raca,
                    idade: this.idade,
                    tamanho: this.tamanho,
                    peso: this.peso,
                    castrado: this.castrado,
                    foto: this.foto,
                    
                });
                this.nome = "";
                this.tipo = "";
                this.raca = "";
                this.raca = "";
                this.idade = "";
                this.tamanho = "";
                this.peso = "";
                this.castrado = "";
                this.foto = "";

                
            } catch (err) {
                console.log(err);
            }
        },
        cancelar() {
            this.nome = "";
            this.tipo = "";
            this.raca = "";
            this.raca = "";
            this.idade = "";
            this.tamanho = "";
            this.peso = "";
            this.castrado = "";
            this.foto = "";
            this.$router.push("/adote");
        },

    },
};
</script>

