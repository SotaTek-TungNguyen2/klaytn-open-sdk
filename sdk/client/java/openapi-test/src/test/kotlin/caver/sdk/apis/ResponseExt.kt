package caver.sdk.apis

import com.google.gson.GsonBuilder
import com.google.gson.JsonParseException
import retrofit2.Response

import retrofit2.Call

fun <T> Call<T>.result(): T? {
    try {
        val response = this.execute()
        if (response.isSuccessful && response.body() != null) {
            return response.body()
        } else {
            throw Exception("${response.errorBody()?.string() ?: "Unknown Error"}")
        }
    } catch (error: Exception) {
        throw error
    }
}

