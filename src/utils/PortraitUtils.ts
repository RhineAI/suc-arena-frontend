import DataService from "@/app/service/data-service";

const NEW_AVATAR_MODE = true

export default function getPortraitByName(name: string, isResource=false): string {
  let portrait = ''
  if (isResource) {
    for(let resource of DataService.settings.resources) {
      if (resource.name === name) {
        portrait = resource.portrait
        break
      }
    }
    if (portrait) {
      let last = portrait.split('/').pop()
      if (last) {
        return '/profile/resources/' + last
      }
    }
  } else {
    if (NEW_AVATAR_MODE) {
      if (name === 'C0000') {
        return '/profile/characters/C0000.png'
      }
      const map = new Map([
        ['C0001', '5-1.png'],
        ['C0002', '6-2.png'],
        ['C0003', '3-1.png'],
        ['C0004', '4-2.png'],
        ['C0005', '5-2.png'],
        ['C0006', '6-1.png'],
        ['C0007', '3-2.png'],
        ['C0008', '4-1.png'],
      ])
      if (map.has(name)) {
        return '/avatar/user/' + map.get(name)
      } else {
        return '/profile/user.png'
      }
    }
    for(let character of DataService.settings.characters) {
      if (character.name === name) {
        portrait = character.portrait
        break
      }
    }
    if (portrait) {
      let last = portrait.split('/').pop()
      if (last) {
        return '/profile/characters/' + last
      }
    }
  }
  return '/profile/user.png'
}
