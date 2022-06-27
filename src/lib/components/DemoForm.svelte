<script>
  let submitted;
  let form = {
    name: "",
    email: "",
    mobile: "",
    receive_news: false,
  };

  const handleSubmit = async () => {
    // Send a POST request to src/routes/contact.js endpoint
    const response = await fetch("/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    });

    const json = await response.json();
    submitted = true;
  };
</script>

{#if !submitted}
  <form on:submit|preventDefault={handleSubmit} method="post">
    <h3>Schedule a free demo</h3>

    <div class="textfields">
      <label for="name">name</label>
      <input
        bind:value={form.name}
        id="name"
        name="name"
        type="text"
        required
      />

      <label for="b_email">business e-mail</label>
      <input
        bind:value={form.email}
        id="b_email"
        name="email"
        type="email"
        required
      />

      <label for="mobile">mobile</label>
      <input
        bind:value={form.mobile}
        id="mobile"
        name="mobile"
        type="tel"
        required
      />
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
{:else}
  <div class="wrap">
    <div class="submitted">Your message has been sent to our team</div>
  </div>
{/if}

<style lang="postcss">
  form {
    width: calc(100% - 4rem);
    @apply bg-neutral-900 border-4 border-secondary rounded-3xl mb-8 mx-auto max-w-full lg:max-w-[50rem] relative z-[1];
    @apply flex flex-col px-6 lg:px-12 py-4 lg:mb-[10rem];

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

  .submitted {
    @apply alert alert-success;
  }
  .wrap {
    @apply container m-auto my-8;
  }
</style>
