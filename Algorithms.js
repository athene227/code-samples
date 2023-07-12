// Bubble Sort in JavaScript:
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

// Merge Sort in JavaScript:
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j))
}

// Quick Sort in JavaScript:
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  const pivot = arr[right]
  let i = left - 1

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++
      swap(arr, i, j)
    }
  }
  swap(arr, i + 1, right)
  return i + 1
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// Heap Sort in JavaScript:
function heapSort(arr) {
  buildMaxHeap(arr)

  for (let i = arr.length - 1; i >= 1; i--) {
    swap(arr, 0, i)
    heapify(arr, i, 0)
  }
  return arr
}

function buildMaxHeap(arr) {
  const n = arr.length
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i)
  }
}
function heapify(arr, n, i) {
  let largest = i
  const left = 2 * i + 1
  const right = 2 * i + 2

  if (left < n && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== i) {
    swap(arr, i, largest)
    heapify(arr, n, largest)
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// Binary Search in JavaScript:
function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

// Breadth-First in JavaScript:
function breadthFirstSearch(root, target) {
  const queue = [root]

  while (queue.length > 0) {
    const node = queue.shift()
    if (node.value === target) {
      return node
    }
    queue.push(...node.children)
  }

  return null
}

// Depth-First Search
function depthFirstSearch(root, target) {
  if (root.value === target) {
    return root
  }

  for (const child of root.children) {
    const result = depthFirstSearch(child, target)
    if (result) {
      return result
    }
  }

  return null
}
