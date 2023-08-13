import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function eloColor(elo: number) {
  return elo >= 0 && elo <= 599
    ? "text-gray-950"
    : elo >= 600 && elo <= 1199
    ? "text-gray-500"
    : elo >= 1200 && elo <= 1799
    ? "text-yellow-500"
    : elo >= 1800
    ? "text-blue-400"
    : ""
}

export function addRank(elo: number) {
  return elo >= 0 && elo <= 199
    ? "Coal I"
    : elo >= 200 && elo <= 399
    ? "Coal II"
    : elo >= 400 && elo <= 599
    ? "Coal III"
    : elo >= 600 && elo <= 799
    ? "Iron I"
    : elo >= 800 && elo <= 999
    ? "Iron II"
    : elo >= 1000 && elo <= 1199
    ? "Iron III"
    : elo >= 1200 && elo <= 1399
    ? "Gold I"
    : elo >= 1400 && elo <= 1599
    ? "Gold II"
    : elo >= 1600 && elo <= 1799
    ? "Gold III"
    : elo >= 1800 && elo <= 1999
    ? "Diamond I"
    : elo >= 2000 && elo <= 2199
    ? "Diamond II"
    : elo >= 2200 && elo <= 2399
    ? "Diamond III"
    : ""
}

export function timeFormat(time: number) {
  const runTime = new Date(time)
  return runTime.toISOString().substr(14, 8)
}

export function timeSince(timestamp: number): string {
  const now = Date.now() / 1000 // Current timestamp in seconds
  const diff = now - timestamp

  const seconds = Math.floor(diff)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 60) {
    return "moments ago"
  } else if (minutes < 60) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`
  } else if (hours < 24) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`
  } else {
    return days === 1 ? "1 day ago" : `${days} days ago`
  }
}

export function advancementLabel(advancement: string) {
  return advancement === "story.mine_stone"
    ? "Stone Age"
    : advancement === "story.upgrade_tools"
    ? "Getting an Upgrade"
    : advancement === "story.smelt_iron"
    ? "Acquire Hardware"
    : advancement === "story.obtain_armor"
    ? "Suit Up"
    : advancement === "story.lava_bucket"
    ? "Hot Stuff"
    : advancement === "story.iron_tools"
    ? "Isn't It Iron Pick"
    : advancement === "story.deflect_arrow"
    ? "Not Today, Thank You"
    : advancement === "story.form_obsidian"
    ? "Ice Bucket Challenge"
    : advancement === "story.mine_diamond"
    ? "Diamonds!"
    : advancement === "story.enter_the_nether"
    ? "We Need to Go Deeper"
    : advancement === "story.shiny_gear"
    ? "Cover me with diamonds"
    : advancement === "story.enchant_item"
    ? "enchanted an item"
    : advancement === "story.cure_zombie_villager"
    ? "Zombie Doctor"
    : advancement === "story.follow_ender_eye"
    ? "Eye Spy"
    : advancement === "story.enter_the_end"
    ? "The End?"
    : advancement === "nether.return_to_sender"
    ? "Return to Sender"
    : advancement === "nether.find_bastion"
    ? "Those Were the Days"
    : advancement === "nether.obtain_ancient_debris"
    ? "Hidden in the Depths"
    : advancement === "nether.find_fortress"
    ? "A Terrible Fortress"
    : advancement === "nether.obtain_crying_obsidian"
    ? "Who is Cutting Onions?"
    : advancement === "nether.distract_piglin"
    ? "Oh Shiny"
    : advancement === "nether.loot_bastion"
    ? "War Pigs"
    : advancement === "nether.obtain_blaze_rod"
    ? "Into Fire"
    : advancement === "end.kill_dragon"
    ? "Free the End"
    : advancement === "adventure.ol_betsy"
    ? "Ol' Betsy"
    : advancement === "adventure.sleep_in_bed"
    ? "Sweet Dreams"
    : advancement === "adventure.shoot_arrow"
    ? "Take Aim"
    : advancement === "adventure.kill_a_mob"
    ? "Monster Hunter"
    : advancement === "projectelo.timeline.blind_travel"
    ? "Blind Travel"
    : advancement === "projectelo.timeline.death"
    ? "Death Reset"
    : ""
}
