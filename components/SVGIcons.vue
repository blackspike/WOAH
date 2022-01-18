<template lang="pug">
svg(xmlns='http://www.w3.org/2000/svg', style='display: none')
  symbol#icon_check_square(
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    path(d='M9 11l3 3L22 4')
    path(d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11')

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
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    path(d='M12 5v14')
    path(d='M5 12h14')

  symbol#icon_drag(viewbox='0 0 16 9')
    path(d='M16,0V1H0V0ZM0,5H16V4H0ZM0,9H16V8H0Z', fill='currentColor')
    path(d='M16,0H0V1H16V0Zm0,4H0V5H16V4Zm0,4H0V9H16V8Z', fill='currentColor')

  symbol#icon_edit(
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    path(d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7')
    path(d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z')

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

  symbol#icon_play(
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    polygon(points='5 3 19 12 5 21 5 3')

  symbol#icon_pause(
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    path(d='M6 4h4v16H6Z')
    path(d='M14 4h4v16h-4Z')

  symbol#icon_stop(
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    rect(width='18', height='18', x='3', y='3', rx='2')

  symbol#icon_watch(
    viewBox='0 0 24 24',
    fill='none',
    stroke='currentColor',
    stroke-width='2',
    stroke-linecap='round',
    stroke-linejoin='round'
  )
    path(d='M12 5a7 7 0 1 0 0 14 7 7 0 1 0 0-14Z')
    path(d='M12 9l0 3 1.5 1.5')
    path(
      d='M16.51 17.35l-.35 3.83v0c-.1 1.03-.97 1.82-2 1.82H9.83v0c-1.04 0-1.91-.79-2-1.82l-.35-3.83m.01-10.7l.35-3.83V2.81C7.93 1.78 8.79.99 9.83.99h4.35V.99c1.03-.01 1.9.78 2 1.82l.35 3.83'
    )

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
</template>

<script>
export default {
  name: 'SVGIcons',
}
</script>

<style lang="scss"></style>
