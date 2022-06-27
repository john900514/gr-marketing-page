<section {...$$restProps}>
    <slot name="pre-container"/>
    <div class="container flex flex-col items-center">
        <slot/>
    </div>
</section>
<style>
    section{
        @apply overflow-x-hidden overflow-y-clip max-w-[100vw] relative;
    }
</style>