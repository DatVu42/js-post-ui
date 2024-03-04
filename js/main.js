import postApi from './api/postApi'

async function main() {
  try {
    const queryParams = {
      _page: 1,
      _limit: 5,
    }
    const getAllResponse = await postApi.getAll(queryParams)
    console.log(getAllResponse)
  } catch (error) {
    console.log('get all failed', error)
  }
}

main()
