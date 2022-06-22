<script>
  let form = {
    name: "",
    bemail: "",
    mobile: "",
    receive_news: false,
  };

  async function onSubmit(event) {
    console.log("submit it", form);
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <h3>Schedule a free demo</h3>

  <div class="textfields">
    <label for="name">name</label>
    <input bind:value={form.name} id="name" type="text" />

    <label for="b_email">business e-mail</label>
    <input bind:value={form.bemail} id="b_email" type="text" />

    <label for="mobile">mobile</label>
    <input bind:value={form.mobile} id="mobile" type="text" />
  </div>

  <fieldset>
    <legend
      >I'd like to occasionally receive exciting content and product
      opportunities related to the fitness management industry.</legend
    >

    <div class="choices">
      <input
        bind:group={form.receive_news}
        value={true}
        type="radio"
        id="yes"
        name="solicit"
      />
      <label for="yes">Yes</label>

      <input
        bind:group={form.receive_news}
        value={false}
        type="radio"
        id="no"
        name="solicit"
      />
      <label for="no">no</label>
    </div>
  </fieldset>

  <button type="submit">NEXT</button>
</form>

<style>
  form {
    @apply bg-neutral-900 border-4 border-secondary rounded-3xl mb-8;
    @apply flex flex-col px-12 py-4;

    fieldset {
      @apply leading-none my-4 mb-4;

      div.choices {
        @apply grid grid-rows-1 h-auto gap-2 mt-6;
        grid-template-columns: 1.5rem auto 1.5rem auto 1fr;

        input[type="radio"] {
          @apply appearance-none m-0 w-4 h-4 rounded-md font-[inherit];
          @apply border;
        }

        input[type="radio"]:checked {
          @apply bg-secondary;
        }

        label {
          @apply mr-4;
        }
      }
    }

    div.textfields {
      @apply flex flex-col;

      label {
        @apply py-2;
      }
    }

    label {
      @apply uppercase;
    }

    input {
      @apply py-2 px-2 rounded-lg border-2 border-secondary bg-white bg-opacity-5;
      @apply outline-none focus-within:bg-opacity-25;
    }

    h3 {
      @apply text-[1.375rem];
    }

    button {
      @apply shadow-md uppercase mt-8 mb-4 py-2 px-10 bg-secondary w-auto mx-auto rounded-full font-bold duration-200;
      @apply hover:bg-accent-content hover:text-secondary;
      @apply active:scale-95 active:opacity-50 active:shadow-sm;
    }
  }
</style>
