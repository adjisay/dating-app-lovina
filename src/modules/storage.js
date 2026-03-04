const STORAGE_KEYS = {
  LIKES: "lovina_likes",
  MATCHES: "lovina_matches",
  REQUESTS: "lovina_requests",
  AUTH: "lovina_auth",
  SETTINGS: "lovina_settings",
}

function getItem(key) {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // storage full or unavailable
  }
}

function removeItem(key) {
  localStorage.removeItem(key)
}

export function getLikes() {
  return getItem(STORAGE_KEYS.LIKES) || []
}

export function addLike(userId) {
  const likes = getLikes()
  if (!likes.includes(userId)) {
    likes.push(userId)
    setItem(STORAGE_KEYS.LIKES, likes)
  }
  return likes
}

export function getMatches() {
  return getItem(STORAGE_KEYS.MATCHES) || []
}

export function addMatch(userId) {
  const matches = getMatches()
  if (!matches.includes(userId)) {
    matches.push(userId)
    setItem(STORAGE_KEYS.MATCHES, matches)
  }
  return matches
}

export function getRequests() {
  return getItem(STORAGE_KEYS.REQUESTS) || []
}

export function addRequest(userId) {
  const requests = getRequests()
  if (!requests.includes(userId)) {
    requests.push(userId)
    setItem(STORAGE_KEYS.REQUESTS, requests)
  }
  return requests
}

export function removeRequest(userId) {
  const requests = getRequests().filter((id) => id !== userId)
  setItem(STORAGE_KEYS.REQUESTS, requests)
  return requests
}

export function getAuth() {
  return getItem(STORAGE_KEYS.AUTH)
}

export function setAuth(data) {
  setItem(STORAGE_KEYS.AUTH, data)
}

export function clearAuth() {
  removeItem(STORAGE_KEYS.AUTH)
}

export function getSettings() {
  return (
    getItem(STORAGE_KEYS.SETTINGS) || {
      ageRange: [21, 30],
      distance: 50,
      notifications: true,
    }
  )
}

export function saveSettings(settings) {
  setItem(STORAGE_KEYS.SETTINGS, settings)
}
