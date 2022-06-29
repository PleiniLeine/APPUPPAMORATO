<template>
	<div> <br>
		
		<v-row>
			<v-col cols="12" sm="8" offset-sm="2">
				<v-alert v-if="enviado" elevation="24" cols="12" sm="8" offset-sm="2" dismissible type="success">
					Mensagem enviada com sucesso!
				</v-alert>
				<v-container>
					<v-list two-line>
								Entre em contato conosco
							<v-divider></v-divider>
							<v-item>
								<v-form ref="form" v-model="valid" lazy-validation >
									<v-text-field v-model="name" :counter="10" :rules="nomeRules" label="Nome*" required ></v-text-field>

									<v-text-field v-model="email" :rules="emailRules" label="E-mail*" required></v-text-field>

									<v-text-field label="Telefone"></v-text-field>

									<v-textarea  label="Mensagem*" :rules="mensagemRules" required>
									</v-textarea>

									<v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
									Enviar mensagem
									</v-btn>
								</v-form>
							</v-item>
					</v-list>

				</v-container>

				<v-container>
					<div>

						<v-card class="d-flex justify-space-around mb-6"  color="grey lighten-4" flat tile>
							<span class="pa-2"  >
								<h2>Ou converse conosco pelo WhatsApp</h2>
							</span>
							<span class="pa-2" color="success"  tile>
								<a href="https://api.whatsapp.com/send?phone=5511944971953" target="_blank">
								<v-btn color="success" class="mr-4">
									<img src="../assets/logo-whatsapp.png" width="30px">
									<span>WhatsApp</span>
								</v-btn>
								</a>
							</span>
						</v-card>
					</div>
				</v-container>
				
			</v-col>
		</v-row>
	</div>
</template>

<script>
  export default {
    data: () => ({
	enviado: false,
      valid: true,
      name: '',
      nomeRules: [
        v => !!v || 'Nome é obrigatório.',
        v => (v && v.length <= 10) || 'Nome precisa ter no máximo 10 caracteres.',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório.',
        v => /.+@.+\..+/.test(v) || 'Insira um e-mail válido.',
      ],
	  mensagemRules: [
        v => !!v || 'Mensagem é obrigatório.'
      ],
     
    }),

    methods: {
      validate () {
        this.$refs.form.validate(),
		this.$refs.form.reset(),
		this.enviado = true
      },
    },
	mounted() {
		this.valid = false;
	}
  }
</script>

<style scoped>

</style>