<template>
    <div>
        <div>
            <v-app-bar color="#FFD700" dense dark>
                <v-toolbar-title>Adote seu novo companheiro</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-app-bar>
        </div>
        <br>

        <v-row>
            <v-col cols="12" sm="8" offset-sm="2">
                <div class="field">
                    <label class="label">Nome do adotante</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Nome completo do adotante" v-model="nome_adotante"/>
                    </div>
                </div>
            </v-col>
        </v-row>

        
        <v-row>
            <v-col cols="12" sm="4" offset-sm="2">
                <span class="field">
                    <label class="label"> Endereço</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Endereço do adotante" v-model="endereco_adotante"/>
                    </div>
                </span>
            </v-col>
            <v-col cols="12" sm="4">
                <span class="field">
                    <label class="label">Telefone</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Telefone para contato" v-model="telefone_adotante"/>
                    </div>
                </span>
            </v-col>
        </v-row>
        <br>


        <v-row>

            <v-col cols="12" sm="8" offset-sm="2">
                <div class="field">
                    <label class="label">Nome do animal que deseja adotar</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Nome do animal" v-model="nome_animal"/>
                    </div>
                </div>
            </v-col>
        </v-row>

        <!--
            Adicionar funcao que exclui animal ao ser adotado
        </-->

        <v-row>
            <v-col cols="12" sm="4" offset-sm="2">
                <div class="text-center field">
                    <div class="control">
                        <v-btn class="button is-success" color="success" @click="inserirAdotante">
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

export default {
    name: 'Adotar',
    data() {
        return {
            animal: "",

            nome_adotante: "",
            endereco_adotante: "",
            telefone_adotante: "",

            nome_animal: "",
        }
    },
    methods: {
        async inserirAdotante() {
            try {
                await axios.post("http://localhost:5000/adotantes", {
                    nome_adotante: this.nome_adotante,
                    endereco_adotante: this.endereco_adotante,
                    telefone_adotante: this.telefone_adotante,

                    nome_animal: this.nome_animal,
                });
                this.nome_adotante = "",
                this.endereco_adotante = "",
                this.telefone_adotante = "",
                this.nome_animal = "",
                this.$router.push("/adote");
            } catch (err) {
                console.log(err);
            }
        },

        cancelar() {
            this.nome_adotante = "",
            this.endereco_adotante = "",
            this.telefone_adotante = "",
            this.nome_animal = "",
            this.$router.push("/adote");
        },
    },
}
</script>