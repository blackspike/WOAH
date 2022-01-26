<template lang="pug">
svg(xmlns='http://www.w3.org/2000/svg', style='display: none')
  symbol#icon_check(
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    path(d='M22 11.08V12a10 10 0 1 1-5.93-9.14')
    path(d='M22 4L12 14.01l-3-3')

  symbol#icon_spike(viewBox='0 0 18 27', fill='currentColor')
    path(
      d='M9.00032 27L4.01136 20.6044L0 13.5493V3.80326L8.96086 0L18 3.80016V13.5493L13.8858 20.7545L9.00032 27ZM6.74102 18.1323L9.00032 21.0206L11.2577 18.1323L14.2339 12.8967V6.77838L8.9725 4.56503L3.76227 6.7759V12.8967L6.74102 18.1323Z'
    )

  symbol#icon_yoga(
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    path(
      d='M14.571 15.004l.858 1.845s3.857.819 3.857 2.767C19.286 21 17.57 21 17.57 21H13l-2.25-1.25',
      stroke='currentColor',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
    path(
      d='M9.429 15.004l-.857 1.845s-3.858.819-3.858 2.767C4.714 21 6.43 21 6.43 21H8.5l2.25-1.25L13.5 18',
      stroke='currentColor',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
    path(
      d='M3 15.926s2.143-.461 3.429-.922C7.714 8.546 11.57 9.007 12 9.007c.429 0 4.286-.461 5.571 5.997c1.286.46 3.429.922 3.429.922',
      stroke='currentColor',
      stroke-linecap='round',
      stroke-linejoin='round'
    )
    path(
      d='M12 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4z',
      stroke='currentColor',
      stroke-linecap='round',
      stroke-linejoin='round'
    )

  symbol#icon_plus(
    viewbox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='3',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    path(d='M12 5v14')
    path(d='M5 12h14')

  symbol#icon_minus(
    viewbox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='3',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    path(d='M5 12h14')

  symbol#icon_drag(viewbox='0 0 16 9')
    path(d='M16,0V1H0V0ZM0,5H16V4H0ZM0,9H16V8H0Z', fill='currentColor')
    path(d='M16,0H0V1H16V0Zm0,4H0V5H16V4Zm0,4H0V9H16V8Z', fill='currentColor')

  symbol#icon_trash(
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    path(d='M3 6h18')
    path(
      d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'
    )
    path(d='M10 11v6')
    path(d='M14 11v6')

  symbol#icon_menu(viewBox='0 0 20 10', fill='currentColor', stroke='none')
    rect(height='2', width='16', x='2')
    rect(height='2', width='13', x='5', y='8')

  symbol#icon_x(
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    path(d='M18 6L6 18')
    path(d='M6 6l12 12')

  symbol#icon_gear(
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    circle(cx='12', cy='12', r='3')
    path(
      d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'
    )

  symbol#icon_blackspike(viewBox='0 0 1182 436')
    path(
      fill='currentColor',
      d='M139.11 435.25 62 332.15 0 218.42V61.31L138.5 0l139.71 61.26v157.16l-63.59 116.15zM104.19 292.3l34.92 46.56L174 292.3l46-84.4v-98.63l-81.32-35.68-80.53 35.64v98.67zM479.71 174.68c0 25.36-17.78 44.85-68.68 44.85h-99.16V60.58h102.75c48.82 0 61.12 22 61.12 42.58 0 18.35-9.46 25.54-19.87 31.6v3.4c14.76 7.95 23.84 18.55 23.84 36.52zM369 104.29v19.87h39.17c10.59 0 12.86-6 12.86-9.84 0-4.16-2.27-10-12.86-10zM421.81 165c0-4-2.27-10.59-12.87-10.59H369v21.38h39.92c10.62.03 12.89-7.35 12.89-10.79zM490.13 60.58h57.14v111.27h82.5v47.68H490.13zM764.88 200.42h-64.71l-6.06 19.11h-59l57.3-158.95h80.23l57.53 159h-59.23zm-13.43-42.2-14-43.9h-9.84l-14 43.9zM818.63 140.06c0-51.28 35.76-84.78 90.07-84.78 39.93 0 81.18 17.6 85.53 73.61h-54.5c-3.59-16.46-14.76-24.22-31-24.22-18.35 0-33.3 13.44-33.3 35.39 0 21.76 15 35.38 33.3 35.38 16.27 0 27.44-7.76 31-24.6h54.5c-4.35 56.39-45 74-85.53 74-54.31-.01-90.07-33.5-90.07-84.78zM1123.66 219.53 1084.3 166h-3.59l-19.87 21.38v32.17h-57V60.58h57v58.66h3.78l52.23-58.66h63.58l-64.15 70.77 65.66 88.18zM308.09 340.21h51.28c.38 9.46 8.32 15 29.9 15.33 18.54.18 26.49-4.74 26.49-10.41 0-3-.76-8.33-15.14-10.22l-20.82-3.22c-29.89-4.73-68.12-6.81-68.12-49.57 0-32 25.55-51.66 78.15-51.66 46.93 0 79.67 12.11 78.34 59.41h-51.09c-1.7-9.27-9.84-14.94-28.57-14.94-16.09 0-21.95 4.54-21.95 10.21 0 2.65 1.32 7.95 12.11 9.65l16.65 2.65c32 5.3 77.39 4.73 77.39 50.15 0 35.57-27.25 52.6-83.44 52.41-56.96-.19-82.89-17.22-81.18-59.79zM481.8 235.76h92.53c43.71 0 70.39 18.92 70.39 63.39 0 44.28-26.68 63.2-70.2 63.2h-35.58v32.35H481.8zm87.42 79.09c10.6 0 17.6-5.3 17.6-15.7 0-10.6-7-15.9-17.41-15.9h-30.47v31.6zM655.13 235.76h57.15V394.7h-57.15zM844.55 394.7l-39.36-53.55h-3.6l-19.87 21.39v32.16h-57V235.76h57v58.66h3.79l52.22-58.66h63.58l-64.14 70.77 65.66 88.17zM907 235.76h146.27v45.6h-89.13v15.52h85.72v36.71h-85.72v15.32h89.12v45.79H907z'
    )
</template>

<script>
export default {
  name: 'SVGIcons',
}
</script>

<style lang="scss"></style>
