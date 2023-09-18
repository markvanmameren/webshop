import { IProduct } from 'src/app/shared/interfaces/product.interface'

export const getProductMock = (): IProduct => ({
  category: 'Automotive',
  dateAdded: '2023-06-10T13:52:09.010Z',
  description:
    "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  id: '1',
  imageUrl:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1163.jpg',
  liked: false,
  material: 'Steel',
  price: '443.00',
  reseller: 'McDermott, Walter and Green',
  tag: 'Fantastic',
  title: 'Rustic Rubber Gloves',
})
