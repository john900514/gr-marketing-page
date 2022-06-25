<script>
import Arrow from "svelte-carousel/src/components/Arrow/Arrow.svelte";
import AutoDripIcon from "./icons/Auto_drip_icon.svelte";

</script>
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