/* Simple modal component with a title, a close button and a slot for content. 
	The component emits an event when the close button is clicked. 
	The event is handled in the parent component. The parent component then closes the modal. */

<template>
	<div v-if="show" class="modal">
		<div class="modal-overlay" @click="$emit('close')"></div>
		<div class="modal-content">
			<div class="modal-header">
				<h2>{{ title }}</h2>
				<button class="close" @click="$emit('close')">
					X
				</button>
			</div>
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
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;

	.modal-overlay {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.modal-content {
		background-color: #a8a8a8;
		border-radius: 5px;
		padding: 20px;
		width: 80%;
		max-width: 600px;

		.modal-header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			h2 {
				margin: 0;
			}

			.close {
				background-color: transparent;
				border: none;
				font-size: 20px;
				cursor: pointer;
			}
		}
	}
}
</style>
	