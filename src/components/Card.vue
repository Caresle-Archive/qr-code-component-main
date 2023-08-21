<template>
    <div class="
        w-11/12 mx-auto p-4 border border-qr-light-gray rounded-2xl
        mt-28 shadow-xl shadow-qr-grayish-blue bg-qr-white max-w-sm
    ">
        <img src="../assets/image-qr-code.png"
            class="rounded-lg"
        />
        <slot name="header"></slot>
        <slot name="content"></slot>
    </div>
</template>