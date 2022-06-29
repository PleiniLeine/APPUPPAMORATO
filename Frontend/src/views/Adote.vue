<template >
	<div class="text-center">

		<template>
			<div>
				<v-app-bar color="#FFD700" dense dark>
					<v-toolbar-title>Gatos</v-toolbar-title>
					<v-spacer></v-spacer>
				</v-app-bar>
			</div>
			<br>

			<v-carousel height="500" hide-delimiter-background>
				<v-carousel-item v-for="gato in gatos" :key="gato.id">
					<v-hover v-slot="{ hover }">
						<v-card class="mx-auto" color="grey lighten-4" width="500">
							<v-img width="500" height="300">
								<img :src="gato.foto">
								<v-expand-transition>
									<div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text" style="height: 100%;">
										{{gato.nome}}
									</div>
								</v-expand-transition>
							</v-img>

							<v-card-text class="pt-6" style="position: relative;">
								<router-link :to="{name: 'Adotar'}">
									<v-btn  absolute color="orange" class="white--text" fab large right top>
										Adotar
									</v-btn>
								</router-link>
								
								<div class="font-weight-light">
									<strong>Raça: </strong> {{gato.raca}} <br>
									<strong>Sexo: </strong> {{gato.sexo}} <br>
									<strong>Idade aproximada: </strong> {{gato.idade}} <br>
									<strong>Tamanho: </strong> {{gato.tamanho}} <br>
									<strong>Peso: </strong> {{gato.peso}} <br>
									<strong>Castrado: </strong> {{gato.castrado}}
								</div>
							</v-card-text>
						</v-card>
					</v-hover>
				</v-carousel-item>
			</v-carousel>

			<div>
				<v-app-bar color="#FFD700" dense dark>
					<v-toolbar-title>Cachorros</v-toolbar-title>
					<v-spacer></v-spacer>
				</v-app-bar>
			</div>
			<br>

			<v-carousel height="500" hide-delimiter-background>
				<v-carousel-item v-for="cachorro in cachorros" :key="cachorro.id">
					<v-hover v-slot="{ hover }">
						<v-card class="mx-auto" color="grey lighten-4" width="500">
							<v-img width="500" height="300">
								<img :src="cachorro.foto">
								<v-expand-transition>
									<div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text" style="height: 100%;">
										{{cachorro.nome}}
									</div>
								</v-expand-transition>
							</v-img>

							<v-card-text class="pt-6" style="position: relative;">
								<v-btn :to="{name: 'Adotar'}" absolute color="orange" class="white--text" fab large right top>
									Adotar
								</v-btn>
								<div class="font-weight-light">
									<strong>Raça: </strong> {{cachorro.raca}} <br>
									<strong>Sexo: </strong> {{cachorro.sexo}} <br>
									<strong>Idade aproximada: </strong> {{cachorro.idade}} <br>
									<strong>Tamanho: </strong> {{cachorro.tamanho}} <br>
									<strong>Peso: </strong> {{cachorro.peso}} <br>
									<strong>Castrado: </strong> {{cachorro.castrado}}
								</div>
							</v-card-text>
						</v-card>
					</v-hover>
				</v-carousel-item>
				
			</v-carousel>

			<router-link :to="{name: 'AddAnimal'}" class="button is-success mt-5">
				Adicionar novo Animal
			</router-link>
			
			<br>


			
		</template>


		<!--
		<template>
			<div>
				<v-card class="mx-auto" max-width="532" v-for="animal in animais" :key="animal.id">
				<v-card-text>
					<div> {{animal.tipo}} </div>
					<p class="text-h4 text--primary">
						{{animal.nome}}
					</p>
					<div class="text--primary">
						<img :src="animal.foto">
					</div>
				</v-card-text>

				<v-card-actions>
					<v-btn text color="#FCBA03" @click="reveal = true">
						Mais informações
					</v-btn>
				</v-card-actions>

				<v-expand-transition>
					<v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
						<v-card-text class="pb-0">
							<p> <strong>Raça: </strong> {{animal.raca}} </p>
							<p> <strong>Sexo: </strong> {{animal.sexo}} </p>
							<p> <strong>Idade aproximada: </strong> {{animal.idade}} </p>
							<p> <strong>Tamanho: </strong> {{animal.tamanho}} </p>
							<p> <strong>Peso: </strong> {{animal.peso}} </p>
							<p> <strong>Castrado: </strong> {{animal.castrado}} </p>
						</v-card-text>
						<v-card-actions class="pt-0">
							<v-btn text color="#FCBA03" @click="reveal = false">
								Fechar
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-expand-transition>
			</v-card>
			</div>

			<router-link :to="{name: 'AddAnimal'}" class="button is-success mt-5">
				Adicionar novo Animal
			</router-link>
			
			<br>
		</template>

		</-->

		
	</div>
</template>

<script>
import axios from "axios";

export default{
	name: "Adote",
	data() {
		return{
			animais: [],
			gatos: [],
			cachorros: [],
			reveal: false,
			dialog: false,

			model: 0,
			colors: [
				'primary',
				'secondary',
				'yellow darken-2',
				'red',
				'orange',
			],
		}
	},

	methods: {
		async getAnimais() {
			try {
				const response = await axios.get("http://localhost:5000/animais");
				this.animais = response.data;

				for(let i = 0; i < this.animais.length; i++) {
					if(this.animais[i].tipo == 'Gato' || this.animais[i].tipo == 'gato'){
						this.gatos.push(this.animais[i]);
					};
					if(this.animais[i].tipo == 'Cachorro' || this.animais[i].tipo == 'cachorro') {
						this.cachorros.push(this.animais[i]);
					};
				}
			} catch (err) {
				console.log(err);
			}
		},

	},
	mounted() {
		this.getAnimais();
	}
}
	
</script>

<style scoped>

	img{
		width: 500px;
	}

	.v-card--reveal {
		align-items: center;
		bottom: 0;
		justify-content: center;
		opacity: .5;
		position: absolute;
		width: 100%;
	}
</style>