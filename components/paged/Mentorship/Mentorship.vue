<template>
  <section
    class="container-big mt-[3rem] flex h-full flex-col items-center gap-[3rem]"
  >
    <div class="flex items-center gap-[1.6rem]">
      <NuxtIcon name="mentorship" />
      <h1 class="heading">Менторство</h1>
    </div>

    <Transition name="content">
      <div
        class="flex w-full flex-1 flex-col items-center gap-[4.2rem]"
        v-if="isContentsShowing"
      >
        <h2 class="heading-small max-w-[55rem] text-center">
          {{ stepsTitle[currentStep] }}
        </h2>

        <template v-if="currentStep === 1">
          <PagedMentorshipStepsTechnologySelect v-model="tech" />
          <PagedMentorshipStepsNextBtn @click="handleGoFromSelect" />
        </template>

        <template v-else-if="currentStep === 2">
          <PagedMentorshipStepsDetails
            v-model="details.text"
            @files="handleFiles"
          />
          <PagedMentorshipStepsNextBtn @click="handleGoFromDetails" />
        </template>

        <template v-else-if="currentStep === 3">
          <PagedMentorshipStepsCalendar
            @date="handleDate"
            :selected="dateRef"
          />
          <PagedMentorshipStepsNextBtn @click="handleGoFromDate" />
        </template>

        <template v-else-if="currentStep === 4">
          <PagedMentorshipStepsCall />
        </template>
      </div>
    </Transition>
  </section>

  <footer>
    <nav class="flex w-full flex-wrap justify-between lg:gap-[2rem]">
      <button
        v-for="step in steps"
        :key="step"
        class="text-medium disabled:grayscale-100 flex items-center gap-[1.4rem] disabled:cursor-default lg:gap-[0.8rem]"
        :disabled="step > stepsElapsed"
        @click="handleStep(step)"
      >
        <span
          :class="[
            'flex aspect-square min-w-[3.4rem]  items-center justify-center   rounded-full  transition-all',
            step === currentStep && 'bg-blue text-white ',
          ]"
        >
          {{ step }}
        </span>

        <span>
          {{ stepsFooterTitle[step -1] }}
        </span>
      </button>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import sleep from "~/features/utils/sleep";
import useToastStore from "~/stores/useToastStore";
import { TDateValues } from "~/features/types/shared.types";
import { TTechnology, techs } from "~/features/constants/techs.constants";

type TStepsTuple = [string, string, string, string];
const steps = 4;
const currentStep = ref<number>(1);

const stepsElapsed = ref<number>(0);

const dateRef = reactive<TDateValues>({
  time: null,
  date: null,
});

const tech = ref<TTechnology>(techs[0]);

const details = reactive<{ text: string; files: File[] | null }>({
  text: "",
  files: null,
});

function handleFiles(files: File[]) {
  details.files = files;
}

watchEffect(() => {
  console.log(tech.value);
});

const toast = useToastStore();

const isContentsShowing = ref<boolean>(true);

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

function handleNextStep() {
  handleStep(++currentStep.value);
}

function handleGoFromDate() {
  if (!dateRef.date || !dateRef.time)
    return toast.warning({ text: "Пожалуйста, выберите время" });

  handleNextStep();
  alert(JSON.stringify([details, dateRef, tech]))
}

function handleGoFromSelect() {
  handleNextStep();
}

function handleGoFromDetails() {
  if (!details.text)
    return toast.warning({ text: "Пожалуйста, опишите вашу проблему" });
  handleNextStep();

  
}
</script>

<style scoped lang="scss">
.content-enter-from,
.content-leave-to {
  opacity: 0;
}

.content-enter-active,
.content-leave-active {
  transition: 0.25s ease all;
}
</style>
