<template>
	<nav>
		<router-link id="logo-url" to="/"> <h1>UPPA Francisco Morato</h1></router-link>
		<router-link to="/adote">Adote</router-link> 
		<router-link to="/apoiar">Apoiar</router-link> 
		<router-link to="/contato">Contato</router-link> 
		<router-link to="/sobre">Sobre</router-link>
		<router-link to="/Acessibilidade">Acessibilidade</router-link>
  </nav>
</template>

<script type="text/javascript">
	export default{
		name: 'Navbar'
	}
	
</script>

<style scoped>

	nav{
		background-color: #FCBA03;
		border-bottom: 4px solid #111;
		padding: 10px 50px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	#logo-url {
		margin: auto;
		margin-left: 0;
  	}

	nav a{
		color:  black;
		text-decoration: none;
		margin: 12px;
		transition: .5s;
	}

	nav a:hover{
		color: whitesmoke;
	}
	
</style>