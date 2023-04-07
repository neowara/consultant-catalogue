/* Simple modal component with a title, a close button and a slot for content. 
	The component emits an event when the close button is clicked. 
	The event is handled in the parent component. The parent component then closes the modal. */

<template>
	<div v-if="show" class="modal">
		<div class="modal-overlay" @click="$emit('close')"></div>
		<div class="modal-content">
			<header class="modal-header">
				<h2>{{ title }}</h2>
				<button class="close" @click="$emit('close')">
					<img src="../assets/svg/close.svg" alt="Close" />
				</button>
			</header>
			<div class="modal-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
	
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: 'ModalComponent',
	props: {
		title: {
			type: String,
			required: true
		},
		show: {
			type: Boolean,
			default: false
		}
	}
})
</script>
	
<style lang="scss">
.modal {
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0, 0.3);
	backdrop-filter: blur(0.25rem);
	display: flex;
	justify-content: center;
	align-items: center;

	.modal-overlay {
		position: fixed;
		z-index: -1;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-color: rgba(var(--color-dark-accent-raw), 0.3);
	}

	.modal-content {
		background-color: #000;
		border: 1px solid #555;
		border-radius: 0.25rem;
		padding: 0;
		width: 30rem;
		max-width: 30rem;

		.modal-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1.5rem;
			border-bottom: 1px solid #444;

			h2 {
				margin: 0;
				font-size: var(--font-l);
			}

			.close {
				background-color: transparent;
				border: none;
				cursor: pointer;
				border-radius: 2rem;
				height: 4rem;
				width: 4rem;
				margin: -1rem;
				padding: 1.5rem;
				display: block;

				img{
					width: 1rem;
					height: 1rem;
				}

				&:hover{
					background-color: rgba(255,255,255,0.1);
				}
			}
		}

		.modal-body{
			.filter-modal-content{
				justify-content: flex-start;
				align-items: flex-start;
			}
		}
	}

	
}
</style>