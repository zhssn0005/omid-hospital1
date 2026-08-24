TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0081",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }],

  "thumbnailUrl": "media/panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0078",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }],

  "thumbnailUrl": "media/panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0082",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }],

  "thumbnailUrl": "media/panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0063",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }],

  "thumbnailUrl": "media/panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0064",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }],

  "thumbnailUrl": "media/panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0065",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }],

  "thumbnailUrl": "media/panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0066",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }],

  "thumbnailUrl": "media/panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0067",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }],

  "thumbnailUrl": "media/panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0068",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }],

  "thumbnailUrl": "media/panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0069",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }],

  "thumbnailUrl": "media/panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0070",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0071",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0072",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0074",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0075",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0076",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0083",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0084",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFF89259_E7C5_A055_41D6_45979515E902_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFF89259_E7C5_A055_41D6_45979515E902",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFF89259_E7C5_A055_41D6_45979515E902_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0085",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0086",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0087",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0088",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0089",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0090",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0091",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0093",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "ipd",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "\u0627\u0637\u0641\u0627\u0644",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0103",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0104",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0105",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0106",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0107",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "DSCN0108",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "\u0631\u0648\u062f\u06cc ipd",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "\u0633\u0627\u0644\u0646 \u0637\u0628\u0642\u0647 \u0686\u0647\u0627\u0631\u0645",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "\u0645\u062f\u06cc\u0631\u06cc\u062a",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "\u0648\u0631\u062f\u06cc \u0622\u0646\u062f\u0648\u0633\u06a9\u0648\u067e\u06cc",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "\u0648\u0631\u062f\u06cc \u06a9\u0644\u06cc\u0646\u06cc\u06a9 \u062c\u0646\u0631\u0627\u0644",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "\u0648\u0631\u0648\u062f\u06cc ccu",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_t.jpg",
  "hfovMax": 120,
  "id": "panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF89259_E7C5_A055_41D6_45979515E902",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_EFF89259_E7C5_A055_41D6_45979515E902_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "camera": "this.panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "camera": "this.panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "camera": "this.panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "camera": "this.panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "camera": "this.panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "camera": "this.panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
    "camera": "this.panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
    "camera": "this.panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
    "camera": "this.panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
    "camera": "this.panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
    "camera": "this.panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
    "camera": "this.panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
    "camera": "this.panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
    "camera": "this.panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
    "camera": "this.panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
    "camera": "this.panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
    "camera": "this.panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
    "camera": "this.panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
    "camera": "this.panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 0)",
    "camera": "this.panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_camera"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 0, 1)",
    "camera": "this.panorama_EFF910E1_E7C5_E074_41CC_63A6671B1F3A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 1, 2)",
    "camera": "this.panorama_EFF882CA_E7C5_A0B5_41D8_151EBC9B7FAA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 2, 3)",
    "camera": "this.panorama_EF99AD0E_E7C5_E1CF_41E7_A1F4D1B62161_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 3, 4)",
    "camera": "this.panorama_EFFD7302_E7C6_A1B9_41D0_8438F5913C0F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 4, 5)",
    "camera": "this.panorama_EFFC1CD2_E7C6_A059_41A5_B0589DA11CF5_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 5, 6)",
    "camera": "this.panorama_EFA63611_E7C6_A3DB_41BE_A924BC3E08D2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 6, 7)",
    "camera": "this.panorama_EFFC0F2E_E7C6_A1C8_41DF_F2B00B8DE7AD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 7, 8)",
    "camera": "this.panorama_EFFC581D_E7C6_EFC8_41E8_BE8DAC0D22E7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 8, 9)",
    "camera": "this.panorama_EFFC632B_E7C6_E1C8_41DE_B60D2C1667E4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 9, 10)",
    "camera": "this.panorama_EFFC9EBA_E7C6_E0CB_41A1_754050276CAC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 10, 11)",
    "camera": "this.panorama_EFFCB9A5_E7C6_A0FE_41E7_45BF99CD6C41_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 11, 12)",
    "camera": "this.panorama_EFFB54AD_E7C6_A0C9_41E1_023E88F7DB5B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 12, 13)",
    "camera": "this.panorama_EFFB71A6_E7C5_60FA_41E2_D3CF23BD31F9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 13, 14)",
    "camera": "this.panorama_EFFB2ED7_E7C5_605A_41EA_1DCE7F166F73_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 14, 15)",
    "camera": "this.panorama_EFFBDB19_E7C5_61D7_41DB_97C4753F2E3A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 15, 16)",
    "camera": "this.panorama_EFFA0800_E7C5_AFB5_41DE_7B1FCD0E3B34_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 16, 17)",
    "camera": "this.panorama_EFF8F7F6_E7C5_A05F_41BE_9F2B85A17E2B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF89259_E7C5_A055_41D6_45979515E902",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 17, 18)",
    "camera": "this.panorama_EFF89259_E7C5_A055_41D6_45979515E902_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 18, 19)",
    "camera": "this.panorama_EFF85EE2_E7C5_A076_41D0_41E23AE2E3D3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 19, 20)",
    "camera": "this.panorama_EFF849EF_E7C5_604E_41E3_6B1E3B55338F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 20, 21)",
    "camera": "this.panorama_EFF834C9_E7C5_60B3_4170_8F00C056CAA2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 21, 22)",
    "camera": "this.panorama_EFB2DF23_E7C5_61F7_41EA_8495BF886121_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 22, 23)",
    "camera": "this.panorama_EF88B954_E7CA_A051_41B8_8F289BF0490F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 23, 24)",
    "camera": "this.panorama_EF88B63A_E7CA_A3D0_41C9_A3EE2D23A815_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 24, 25)",
    "camera": "this.panorama_EF8DA32A_E7CA_E1F0_41C0_1DC8BC17B0DF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 25, 26)",
    "camera": "this.panorama_EF8907DC_E7CA_E057_41D5_16EC7502140B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 26, 27)",
    "camera": "this.panorama_EF8B41EB_E7CA_A071_41E5_04E1D4E3F3F9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 27, 28)",
    "camera": "this.panorama_EF89FB94_E7CA_A0D7_41DF_60056A2DA2DC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 28, 29)",
    "camera": "this.panorama_EF89951A_E7CA_A1D2_41D8_57D6EA606FA4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 29, 30)",
    "camera": "this.panorama_EFB07F70_E7CA_A06E_41C9_90482F2FB8AD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 30, 31)",
    "camera": "this.panorama_EFA1AA60_E7CB_606E_41E5_CF04C7448418_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 31, 32)",
    "camera": "this.panorama_EF9B35FC_E7CB_6056_41E7_FE4DE5D0913F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 32, 33)",
    "camera": "this.panorama_EF8B3034_E7CB_9FD5_41BD_27627E5E2D6B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 33, 34)",
    "camera": "this.panorama_EF8B5B3E_E7CB_A1D5_41C3_7E4D9D1E39AE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 34, 35)",
    "camera": "this.panorama_EF8B3926_E7CB_E1F4_41D4_25B6920F4986_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 35, 36)",
    "camera": "this.panorama_EFB6F61B_E7CB_E3DC_41B4_DBF82CA3A6A5_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 36, 37)",
    "camera": "this.panorama_EF8C4208_E7CB_A3BB_41C6_8C8603B95896_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 37, 38)",
    "camera": "this.panorama_EF8DDF43_E7CB_A1AE_41E5_A14C0FFC6226_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 38, 39)",
    "camera": "this.panorama_EF8C3D58_E7CB_A05A_4185_128DF88ABAB7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist, 39, 0)",
    "camera": "this.panorama_EF8C3748_E7CB_61BA_4188_2E8ACC9586E6_camera"
   }
  ],
  "id": "ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist"
 }
], "children": [
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderRadius": 0,
  "paddingLeft": 0,
  "minWidth": 100,
  "progressLeft": 0,
  "toolTipBorderRadius": 3,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBorderSize": 0,
  "playbackBarHeadHeight": 15,
  "minHeight": 50,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontSize": 12,
  "toolTipPaddingRight": 6,
  "paddingBottom": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "toolTipShadowColor": "#333333",
  "toolTipBorderColor": "#767676",
  "toolTipPaddingLeft": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "height": "100%",
  "playbackBarHeadOpacity": 1,
  "playbackBarBottom": 5,
  "id": "MainViewer",
  "progressBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "toolTipFontWeight": "normal",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadow": true,
  "playbackBarOpacity": 1,
  "paddingRight": 0,
  "progressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderSize": 1,
  "progressBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressHeight": 10,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "width": "100%",
  "toolTipBackgroundColor": "#F6F6F6",
  "borderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "toolTipPaddingBottom": 4,
  "paddingTop": 0,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipFontColor": "#606060",
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "toolTipFontStyle": "normal",
  "toolTipFontFamily": "Arial",
  "playbackBarBorderRadius": 0
 },
 {
  "playList": "this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist",
  "scrollBarWidth": 10,
  "height": "82.333%",
  "horizontalAlign": "left",
  "paddingRight": 20,
  "itemLabelFontSize": 14,
  "itemThumbnailShadowVerticalLength": 3,
  "itemThumbnailShadowOpacity": 0.8,
  "itemThumbnailShadowHorizontalLength": 3,
  "bottom": "8.26%",
  "itemBorderRadius": 0,
  "itemBackgroundColor": [],
  "selectedItemLabelFontWeight": "bold",
  "paddingLeft": 20,
  "minWidth": 1,
  "layout": "vertical",
  "borderRadius": 5,
  "itemMode": "normal",
  "itemThumbnailShadow": true,
  "itemLabelFontFamily": "Arial",
  "itemPaddingLeft": 3,
  "itemPaddingBottom": 3,
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "minHeight": 1,
  "backgroundOpacity": 0.2,
  "itemThumbnailOpacity": 1,
  "itemThumbnailShadowSpread": 1,
  "itemBackgroundOpacity": 0,
  "itemBackgroundColorRatios": [],
  "verticalAlign": "top",
  "paddingTop": 10,
  "itemLabelGap": 5,
  "itemPaddingRight": 3,
  "shadow": false,
  "itemThumbnailHeight": 75,
  "itemThumbnailShadowBlurRadius": 4,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "itemLabelFontStyle": "normal",
  "itemHorizontalAlign": "center",
  "class": "ThumbnailList",
  "paddingBottom": 10,
  "itemThumbnailBorderRadius": 26,
  "scrollBarMargin": 2,
  "itemLabelFontColor": "#FFFFFF",
  "backgroundColor": [
   "#000000"
  ],
  "scrollBarColor": "#FFFFFF",
  "gap": 10,
  "backgroundColorRatios": [
   0
  ],
  "itemThumbnailWidth": 75,
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelPosition": "bottom",
  "right": "4.42%",
  "id": "ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D",
  "itemLabelFontWeight": "normal",
  "itemLabelHorizontalAlign": "center",
  "itemPaddingTop": 3,
  "itemOpacity": 1,
  "itemLabelTextDecoration": "none",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemVerticalAlign": "middle"
 }
], 
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "start": "this.syncPlaylists([this.ThumbnailList_E1E61832_EBF4_8B51_41E0_4DF39D01471D_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "width": "100%",
 "paddingLeft": 0,
 "contentOpaque": false,
 "minWidth": 20,
 "layout": "absolute",
 "borderRadius": 0,
 "scripts": {
  "getKey": function(key){    return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "unregisterKey": function(key){    delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){    return key in window; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "registerKey": function(key, value){    window[key] = value; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); }
 },
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "paddingTop": 0,
 "verticalAlign": "top",
 "shadow": false,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "class": "Player",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "paddingRight": 0
})