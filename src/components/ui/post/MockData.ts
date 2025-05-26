import type IPost from "../../../models/post";

const shortPost: IPost = {
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a.",
    date: new Date()
}

const longPost: IPost = {
    title: "Lorem ipsum",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis lorem, eget commodo arcu. Sed malesuada est imperdiet mollis tincidunt. Suspendisse felis justo, elementum ut aliquam quis, tincidunt a magna. Mauris in suscipit dolor. Etiam varius sollicitudin egestas. Mauris tincidunt porttitor felis nec suscipit. In hac habitasse platea dictumst.

Vivamus sollicitudin enim eleifend scelerisque dignissim. Nunc fermentum eros ac justo sollicitudin suscipit. Sed eu accumsan neque. Suspendisse aliquam ex mauris, in iaculis eros tincidunt in. Fusce quis nisl risus. Donec malesuada vitae tortor vel faucibus. Pellentesque eu luctus massa, ac tincidunt nunc. Aliquam fermentum ex vitae sem suscipit pulvinar. In a pretium magna. Proin imperdiet justo tellus, quis pretium nisi ornare et.

Donec semper tortor nec leo luctus luctus nec quis lorem. Sed interdum orci sed condimentum fringilla. Fusce vitae risus convallis, ultricies nunc et, euismod diam. Fusce leo leo, vulputate ut ornare a, iaculis sit amet sem. Nunc vitae leo ornare, viverra nulla ac, condimentum augue. Pellentesque eget nisi pharetra, pellentesque ipsum et, faucibus dui. Nunc luctus neque congue libero elementum, nec pulvinar lectus congue. Aliquam erat volutpat. Vestibulum eu dui hendrerit, rutrum dolor vel, auctor dolor. Donec placerat tortor arcu, sit amet finibus ipsum feugiat sit amet. Fusce sodales et augue ac feugiat.

Phasellus egestas aliquam mauris eget volutpat. Nunc fermentum leo metus, in viverra sapien ultrices id. Vestibulum ornare condimentum dui in iaculis. Cras maximus rhoncus tristique. Proin odio diam, maximus non pharetra nec, placerat sed ex. Proin dolor est, ultricies ac felis mollis, convallis sodales lorem. Vestibulum iaculis erat metus, sit amet laoreet ex ultricies ornare.

Praesent in ligula in lacus sodales venenatis vitae a ligula. Sed lobortis dapibus dictum. Morbi in imperdiet augue. Phasellus eu ante eu nisi sollicitudin rhoncus sed sit amet sapien. Cras ac leo auctor, vulputate massa id, auctor libero. Maecenas sit amet velit risus. Etiam bibendum eros eros, sit amet rutrum odio tincidunt nec. Nunc sodales auctor augue, in dapibus eros tristique tincidunt.`,
    date: new Date()
}

export default { shortPost, longPost }