// pose_detector.js

async function loadPoseNet() {
  // Load PoseNet model
  const net = await posenet.load();
  return net;
}

async function detectPose(net, image) {
  const pose = await net.estimateSinglePose(image, {
    flipHorizontal: false
  });
  return pose;
}
