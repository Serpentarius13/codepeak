<template>
  <section
    class="container-big mt-[3rem] flex flex-col items-center gap-[3rem]"
  >
    <div class="flex items-center gap-[1.6rem]">
      <NuxtIcon name="mentorship" />
      <h1 class="heading">Менторство</h1>
    </div>

    <div class="flex w-full flex-col items-center gap-[4.2rem]" ref="animeRef">
      <h2 class="heading-small max-w-[55rem] text-center">
        {{ stepsTitle[currentStep] }}
      </h2>

      <Transition name="fade">
        <template v-if="currentStep === 0">
          <PagedMentorshipStepsCalendar
            @date="handleDate"
            :selected="dateRef"
          />
        </template>
      </Transition>
      <PagedMentorshipStepsNextBtn @click="handleGoFromDate" />
    </div>
  </section>

  <footer>
    <nav class="flex w-full flex-wrap justify-between lg:gap-[2rem]">
      <button
        v-for="step in steps"
        :key="step"
        class="text-medium disabled:grayscale-100 flex items-center gap-[1.4rem] disabled:cursor-default lg:gap-[0.8rem]"
        :disabled="step - 1 > stepsElapsed"
        @click="handleStep(step - 1)"
      >
        <span
          :class="[
            'flex aspect-square min-w-[3.4rem]  items-center justify-center   rounded-full  transition-all',
            step - 1 === currentStep && 'bg-blue text-white ',
          ]"
        >
          {{ step }}
        </span>

        <span>
          {{ stepsFooterTitle[step - 1] }}
        </span>
      </button>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import anime from "animejs";
import sleep from "~/features/utils/sleep";
import useToastStore from "~/stores/useToastStore";

type TStepsTuple = [string, string, string, string];
const steps = 4;
const currentStep = ref<number>(0);

const stepsElapsed = ref<number>(0);

const animeRef = ref<HTMLElement | null>(null);

const dateRef = reactive<{ time: string | null; date: Date | null }>({
  time: null,
  date: null,
});

const toast = useToastStore();

const isContentsShowing = ref<boolean>(false);

function handleDate({ time, date }: { time: string; date: Date }) {
  console.log(time, date);
  dateRef.time = time;
  dateRef.date = date;
}
const stepsTitle: TStepsTuple = [
  "Выберите язык программирования, с которым у вас возникла проблема",
  "Детально опишите проблему, с которой столкнулись",
  "Давайте подберем время, когда вам удобно",
  "Данные о менторе и ссылка на звонок",
];

const stepsFooterTitle: TStepsTuple = [
  "Создание заявки",
  "Уточняем проблему",
  "Выбираем удобное время",
  "Созваниваемся",
];

function handleTransition() {
  isContentsShowing.value = false;
  sleep(500).then(() => (isContentsShowing.value = true));
}

function handleStep(step: number) {
  currentStep.value = step;
  stepsElapsed.value++;

  handleTransition();
}

function handleGoFromDate() {
  if (!dateRef.date || !dateRef.time)
    return toast.warning({ text: "Пожалуйста, выберите время" });
  else handleStep(++currentStep.value);
}
</script>

<style scoped lang="scss"></style>
