import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0);
  const y = ref(0);
  function update(e) {
    y.value = e.pageX;
    x.value = e.pageY;
  }
  onMounted(() => {
    window.addEventListener('mousemove',update)
  })
  onUnmounted(() => {
    window.removeEventListener('unMousemove',update)
  })
  return {x, y}
}

export const a = 10;