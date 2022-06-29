<template>
	<div>
		<br>
		<div>
			<v-row align="center" justify="center">
				<v-col cols="12">
						<v-card class="mx-auto" height="70%" max-width="70%">
							<v-card-title align="center">
								Uppa Francisco Morato-SP Abrigo de Animais
							</v-card-title>
							<v-card-text class="my-4 text-center text-h6">
								Olá, somos a UPPA e funcionamos como um abrigo
								provisório para animais em situação de rua.
								Fazemos resgates, abrigamos, cuidamos e
								disponibilizamos nossos abrigados para adoção.
							</v-card-text>
							<v-card-text class="my-4 text-center text-h6">
								Estamos na ativa há mais de 5 anos e hoje
								contamos muito com ajuda de pessoas que
								simpatizam com a causa, visto que não temos
								suporte da prefeitura.
							</v-card-text>
								<v-card-text align="center" justify="center">
									<v-img max-height="600" max-width="600" src="../assets/maps.png"></v-img>
								</v-card-text>
						</v-card>
				</v-col>
			</v-row>
		</div>

		<div>
			<input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
		</div>
	</div>

	
</template>

<script>
import axios from "axios";

export default {
	name:'Sobre',
	data() {
		return {
			item:{
				image : null,
				imageUrl: null
			}
		}
	},

	methods: {
		uploadImage(event) {

			const URL = '/imagens/'; 

			let data = new FormData();
			data.append('name', 'my-picture');
			data.append('file', event.target.files[0]); 

			let config = {
			header : {
				'Content-Type' : 'image/jpeg'
			}
			}

			axios.put(
			URL, 
			data,
			config
			).then(
			response => {
				console.log('image upload response > ', response)
			}
			)
		}
	}

	
}
	
</script>