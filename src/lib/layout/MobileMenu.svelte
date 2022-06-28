<script>
    import { browser } from '$app/env';

    let checked = false;

    $:{
        if(browser){
            if(checked){
                document.body.classList.add('noscroll');
            }else{
                document.body.classList.remove('noscroll');
            }
        }
    }

</script>
<!-- The button to open modal -->
<label for="mobile-menu" class="modal-button md:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2rem" viewBox="0 0 25 25">
        <g id="Group_3453" data-name="Group 3453" transform="translate(-329 -69)">
          <rect id="Rectangle_1522" data-name="Rectangle 1522" width="7" height="7" transform="translate(329 78)" fill="#fff"/>
          <rect id="Rectangle_1525" data-name="Rectangle 1525" width="7" height="7" transform="translate(329 87)" fill="#fff"/>
          <rect id="Rectangle_1520" data-name="Rectangle 1520" width="7" height="7" transform="translate(338 69)" fill="#fff"/>
          <rect id="Rectangle_1526" data-name="Rectangle 1526" width="7" height="7" transform="translate(338 87)" fill="#fff"/>
          <rect id="Rectangle_1521" data-name="Rectangle 1521" width="7" height="7" transform="translate(347 69)" fill="#fff"/>
          <rect id="Rectangle_1524" data-name="Rectangle 1524" width="7" height="7" transform="translate(347 78)" fill="#fff"/>
          <rect id="Rectangle_1527" data-name="Rectangle 1527" width="7" height="7" transform="translate(347 87)" fill="#fff"/>
          <rect id="Rectangle_1523" data-name="Rectangle 1523" width="7" height="7" transform="translate(338 78)" fill="#fff"/>
          <rect id="Rectangle_1508" data-name="Rectangle 1508" width="7" height="7" transform="translate(329 69)" fill="#fff"/>
        </g>
      </svg>
</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="mobile-menu" class="modal-toggle" bind:checked={checked} />
<div class="modal md:hidden">
  <div class="modal-box bg-white text-base-300 flex flex-col fixed inset-0 !max-w-[100vw] !w-[100vw] !max-h-[100vh] z-20">
    <div class="flex flex-row w-full items-end">
        <div class="flex-grow h-full"/>
        <label for="mobile-menu" class="mb-16">
            <svg xmlns="http://www.w3.org/2000/svg" width="26.968" height="27.883" viewBox="0 0 26.968 27.883">
                <g id="Group_2154" data-name="Group 2154" transform="translate(-1083.953 -17.154)">
                  <rect id="Rounded_Rectangle_2" data-name="Rounded Rectangle 2" width="34.246" height="3.892" rx="1.946" transform="translate(1086.705 18.069) rotate(45)" fill="#0074c8"/>
                  <rect id="Rounded_Rectangle_2_copy_2" data-name="Rounded Rectangle 2 copy 2" width="34.246" height="3.892" rx="1.946" transform="translate(1083.953 41.37) rotate(-45)" fill="#0074c8"/>
                </g>
              </svg>
          </label>
    </div>
   
    <div class="flex-grow flex flex-col gap-8 items-center">
        <slot/>
    </div>
  </div>
</div>