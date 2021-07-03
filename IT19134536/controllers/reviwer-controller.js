const express = require('express')
const router = express.Router()
const service = require('../services/reviwer-service')



module.exports = function () {

    router.get('/view-posts-for-review', service.viewAllResearchForReview)

    router.get('/view-workshop-for-review', service.viewAllWorkShopProposalForReview)

    router.post('/get-research-by-id', service.getResearchDetailsById)

    router.put('/accept-work-shop', service.acceptWorkShop)

    router.put('/decline-work-shop', service.rejectWorkShop)

    router.put('/accept-research-paper', service.acceptResearch)

    router.put('/decline-research-paper', service.rejectResearch)

    return router

}