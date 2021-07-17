import React, { useEffect, useCallback, useState, useMemo, useContext } from 'react'
import * as R from 'ramda'
import { DataStore } from '@aws-amplify/datastore'
import context from '../context'

interface IDataStore {
  Model: any
  fetchQuery?: (c) => any
  afterSave?: () => void
  afterRemove?: () => void
}

const useDataStore = ({ Model, fetchQuery, afterSave, afterRemove }: IDataStore) => {
  const [list, setList] = useState<any>([])
  const { auth } = useContext(context)
  const [loading, setLoading] = useState<boolean>(false)
  const owner: string = auth.user.attributes.sub

  const fetchJobs = async () => {
    setLoading(true)
    const clients = await DataStore.query(Model, fetchQuery)
    setList(clients)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    fetchJobs()
    const subscription = DataStore.observe(Model).subscribe(() => fetchJobs())

    return () => subscription.unsubscribe()
  }, [])

  const addEdit = useCallback(
    async (entity: typeof Model, isNew = true) => {
      setLoading(true)
      if (isNew) {
        DataStore.save(new Model({ ...entity, owner }))
      } else {
        const original = await DataStore.query(Model, entity.id)

        await DataStore.save(
          Model.copyOf(original, (updated) => {
            const fields = R.keys(updated)
            const excludedFields = ['id', 'createdAt', 'updatedAt']
            const iterable = R.without(excludedFields, fields)
            iterable.forEach((field) => {
              if (!R.includes(field, excludedFields)) {
                updated[field] = entity[field]
              }
            })

            updated.owner = owner
          })
        )
      }
      setLoading(false)

      !loading && afterSave()
    },
    [owner, afterSave]
  )

  const remove = useCallback(
    async (itemId) => {
      const todelete = await DataStore.query(Model, itemId)

      DataStore.delete(todelete)

      !loading && afterRemove()
    },
    [afterRemove]
  )

  return {
    list,
    owner,
    addEdit,
    remove,
    loading
  }
}

export default useDataStore
