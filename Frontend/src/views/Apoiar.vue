<template>
  <div class="down">
		<v-card max-width="450" class="mx-auto">
			<v-toolbar dark>
			<v-toolbar-title>Uppa Abrigo Francisco Morato</v-toolbar-title>
			<v-spacer></v-spacer>
			</v-toolbar>

			<v-list>
				<template>
					<v-list-item  >
						<v-list-item-avatar>
							<img src="../assets/pata.png">
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title>
								Animais resgatados das ruas
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>

					<v-list-item  >
						<v-list-item-avatar>
							<img src="../assets/dog.png">
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title>
								Adote um cão do abrigo
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>

					<v-list-item  >
						<v-list-item-avatar>
							<img src="../assets/coracao.png">
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title>
								Seu melhor amigo pode estar aqui
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>

					<v-list-item  >
						<v-list-item-avatar>
							<img src="../assets/sos.png">
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title>
								Ajude-nos a continuar
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>

					<v-list-item  >
						<v-list-item-avatar>
							<img src="../assets/pix.png">
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title>
								Pix: 11944971953
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>

					<v-list-item  >
						<v-list-item-avatar>
							<img src="../assets/down.png">
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title>
								Camapnha - Clique aqui
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>

					<v-list-item  >
						<v-list-item-content>
							<v-list-item-title>
								<a href="https://linktr.ee/upaa.f.morato" target="_blank">Visite o site da campanha</a>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</template>
			</v-list>
		</v-card>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data: () => {
		return {
			file: "",
			message: ""
		}
    },

	methods: {
	},
  }
</script>

<style scoped>
.down{
	padding-top: 10px;
}
</style>